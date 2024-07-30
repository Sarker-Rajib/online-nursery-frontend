type TInputProperty = {
    placeholder: string
    type: string
    label: string
    required?: boolean
    name: string
}

type TFileProperty = {
    placeholder: string
    type: string
    label: string
    required?: boolean
    name: string
    accept?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({ placeholder, type, label, required, name }: TInputProperty) => {

    return (
        <div className="my-2">
            <label className="ml-1">{label}</label>
            <input type={type} placeholder={placeholder} name={name} className="w-full border p-2" required={required} />
        </div>
    );
};

export const FileInput = ({ placeholder, type, label, required, name, accept, onChange }: TFileProperty) => {

    return (
        <div className="my-2 border rounded border-teal-500">
            <label className="ml-1">{label}</label>
            <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                className="w-full border p-2"
                required={required}
                accept={accept}
            />
        </div>
    );
};
