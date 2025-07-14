type FormData = {
    name: string;
    email: string;
    message: string;
};

export const validationsForm = (formData: FormData) => {
    const errors: Partial<FormData> = {};


    if (!formData.name.trim()) {
        errors.name = "El nombre es obligatorio";
    } else {
        const digits = formData.name.match(/\d/g);  // Todos los dígitos individuales
        const specialCharacters = /[^a-zA-ZÀ-ÿ0-9\s]/; // cualquier cosa que no sea letra, número o espacio

        if (formData.name.length > 30) {
            errors.name = "El nombre no debe contener más de 30 caracteres";
        } else if (formData.name.length < 5) {
            errors.name = "El nombre no debe contener menos de 5 caracteres";
        } else if (digits && digits.length > 0) {
            errors.name = "El nombre no puede contener numeros";
        } else if (specialCharacters.test(formData.name)) {
            errors.name = "No se permiten caracteres especiales";
        }
    }

    if (!formData.email.trim()) {
        errors.email = "El correo es obligatorio";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        errors.email = "Correo inválido";
    } else if (formData.email.length < 15) {
        errors.email = "El correo no puede contener menos de 15 caracteres";
    } else if (formData.email.length > 40) {
        errors.email = "El correo no puede contener más de 40 caracteres";
    }

    if (!formData.message.trim()) {
        errors.message = "El mensaje es obligatorio";
    } else if (formData.message.length < 20) {
        errors.message = "El mensaje no debe contener menos de 20 caracteres";
    } else if (formData.message.length > 200) {
        errors.message = "El nombre no debe contener más de 200 caracteres";
    }

    return errors;
}