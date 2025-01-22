

interface userValudationData{
    user_name?:string|null,
    email_id:string|null,
    password:string|null,
    user_status?:string|null,
    user_role?:string|null,
    department_name?:string|null,
}


export class UserServices {
    static userEmailAndPasswordValidation(data: userValudationData) {
        const errors: string[] = [];

        if (!data.email_id) {
            errors.push("Email ID is required");
        }

        if (!data.password) {
            errors.push("Password is required");
        }

        return errors.length === 0 ? null : errors;
    }

    static userValidations(data: userValudationData) {
        const errors: string[] = [];

        // Check for user name
        if (!data.user_name) {
            errors.push("User name is required");
        }

        // Reuse email and password validation
        const subValidationErrors = this.userEmailAndPasswordValidation(data);
        if (subValidationErrors) {
            errors.push(...subValidationErrors);
        }

        // Check for user status
        if (!data.user_status) {
            errors.push("Status is required");
        }

        // Check for user role and related validations
        if (!data.user_role) {
            errors.push("Role is required");
        } else if (data.user_role === "Student" && !data.department_name) {
            errors.push("Department name is required");
        }

        return errors.length === 0 ? null : errors;
    }
}
