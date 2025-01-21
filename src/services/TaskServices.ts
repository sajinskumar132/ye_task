export class TaskServices{

    static taskValidation(data:any){
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