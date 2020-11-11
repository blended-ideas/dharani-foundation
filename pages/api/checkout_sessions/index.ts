import {NextApiRequest, NextApiResponse} from 'next'
import {formatAmountForStripe} from '../../../utils/stripe-helpers'

import Stripe from 'stripe';
import {SAPLING_VALUE} from '../../../config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27',
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const amount: number = req.body.amount
        try {
            // Validate the amount that was passed from the client.
            if (amount < SAPLING_VALUE || amount <= 0) {
                throw new Error('Invalid amount.')
            }
            // Create Checkout Sessions from body params.
            const params: Stripe.Checkout.SessionCreateParams = {
                submit_type: 'donate',
                payment_method_types: ['card'],
                line_items: [
                    {
                        name: 'Custom amount donation',
                        amount: formatAmountForStripe(amount, 'inr'),
                        currency: 'inr',
                        quantity: 1,
                    },
                ],
                success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/donate-with-checkout`,
            }
            const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
                params
            )

            res.status(200).json(checkoutSession)
        } catch (err) {
            res.status(500).json({statusCode: 500, message: err.message})
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
