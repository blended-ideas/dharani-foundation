import {NextPage} from 'next'
import Layout from '../components/Layout'

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
    return (
        <Layout title="Donate with Checkout | Next.js + TypeScript Example">
            <div className="page-container text-center mt-5">
                <h1>Donate Saplings 🌳</h1>
                <p> Join us in making the planet greener. <br/></p>
                <CheckoutForm/>
            </div>
        </Layout>
    )
}

export default DonatePage
