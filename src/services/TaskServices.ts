interface taskValidationData{
    task_name:string|null,
    task_description:string|null,
    task_created_user:string|null,
    task_due_date_time:string|null,
    assign_user:string|null,
    status:string|null,
}

export class TaskServices{

    static taskValidation(data:taskValidationData){
        const errors: string[] = [];

        if (!data.task_name) {
            errors.push("Task name is required");
        }
        if (!data.task_description) {
            errors.push("Task description is required");
        }
        if(!data.task_created_user){
            errors.push("Task created user is required");
        }
        if (!data.task_due_date_time) {
            errors.push("Task due date time is required");
        }
        if (!data.assign_user) {
            errors.push("Assigned user is required");
        }
        if (!data.status) {
            errors.push("Status is required");
        }
        return errors.length === 0 ? null : errors;
    }
}