import React from 'react'

type Props = {
    name: string
    value: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomDonationInput = ({
                                 name,
                                 value,
                                 onChange,
                             }: Props) => (
    <div className="row no-gutters form-group">
        <label htmlFor="saplingCount" className="col-form-label col-12 col-sm-4 text-md-right pr-sm-2">
            Number of saplings:
        </label>
        <input className="form-control px-2 col-6 offset-3 offset-sm-0" type="number" name={name} value={value} min={1}
               max={1000000}
               onChange={onChange} id="saplingCount"/>
    </div>
)

export default CustomDonationInput
