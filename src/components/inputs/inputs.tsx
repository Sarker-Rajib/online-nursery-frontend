type TInputProperty = {
    placeholder: string
    type: string
    label: string
    required?: boolean
    name: string
}

type TTextArea = {
    label: string
    required?: boolean
    name: string
}

type TSelectProperty = {
    label: string
    required?: boolean
    name: string,
    options: Array<string>
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

export const TextAreaInput = ({ label, required, name }: TTextArea) => {

    return (
        <div className="my-2">
            <label className="ml-1">{label}</label>
            <textarea name={name} className="w-full border p-2" required={required}></textarea>
        </div>
    );
};

export const FormSelects = ({ label, required, name, options }: TSelectProperty) => {

    return (
        <div className="my-2">
            <label className="ml-1">{label}</label>
            <select name={name} className="w-full border p-2" required={required}>
                {
                    options.map((option: string, i: number) => (
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
