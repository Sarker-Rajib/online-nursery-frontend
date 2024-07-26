type TInputProperty = {
    placeholder: string
    type: string
    label: string
    required?: boolean
}

export const FormInput = ({ placeholder, type, label, required }: TInputProperty) => {

    return (
        <div className="my-2">
            <label className="ml-1">{label}</label>
            <input type={type} placeholder={placeholder} className="w-full border p-2" required={required} />
        </div>
    );
};
