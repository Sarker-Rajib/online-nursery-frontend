type TInputProperty = {
    placeholder: string
    type: string
    label: string
    required?: boolean
    name: string
    value?: string | number
}

type TTextArea = {
    label: string
    required?: boolean
    name: string
    value?: string
}

type TSelectProperty = {
    label: string
    required?: boolean
    name: string,
    options: Array<string | number>
    value?: string | number
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

export const FormInput = ({ placeholder, type, label, required, name, value }: TInputProperty) => {

    return (
        <div className="my-2">
            <label className="ml-1">{label}</label>
            <input defaultValue={value} type={type} placeholder={placeholder} name={name} className="w-full border p-2" required={required} />
        </div>
    );
};

export const TextAreaInput = ({ label, required, name, value }: TTextArea) => {

    return (
        <div className="my-2">
            <label className="ml-1">{label}</label>
            <textarea defaultValue={value} name={name} className="w-full border p-2" required={required}></textarea>
        </div>
    );
};

export const FormSelects = ({ label, required, name, options, value }: TSelectProperty) => {

    return (
        <div className="my-2">
            <label className="ml-1">{label}</label>
            <select name={name} className="w-full border p-2" defaultValue={value} required={required}>
                {
                    options.map((option: string | number, i: number) => (
                        <option key={i} value={option}>{option}</option>
                    ))
                }
            </select>
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
