import React, {useState} from 'react'

import CustomDonationInput from '../components/CustomDonationInput';

import getStripe from '../utils/get-stripejs';
import {fetchPostJSON} from '../utils/api-helpers';
import {formatAmountForDisplay} from '../utils/stripe-helpers';
import * as config from '../config';

const CheckoutForm = () => {
    const [loading, setLoading] = useState(false)
    const [saplingCount, setSaplingCount] = useState(10)

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSaplingCount(Number(e.currentTarget.value));
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        // Create a Checkout Session.
        const response = await fetchPostJSON('/api/checkout_sessions', {
            amount: saplingCount * config.SAPLING_VALUE,
        })

        if (response.statusCode === 500) {
            console.error(response.message)
            return
        }

        // Redirect to Checkout.
        const stripe = await getStripe()
        const {error} = await stripe!.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: response.id,
        })
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        console.warn(error.message)
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <CustomDonationInput name={'customDonation'} value={saplingCount} onChange={handleInputChange}/>
            <div>
                <button className="btn btn-primary" type="submit" disabled={loading}>
                    Donate {formatAmountForDisplay(saplingCount * config.SAPLING_VALUE)}
                </button>
            </div>
        </form>
    )
}

export default CheckoutForm
