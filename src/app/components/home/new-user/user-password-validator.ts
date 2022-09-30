import { FormGroup } from '@angular/forms';
export function userPasswordDifferent(formGroup: FormGroup){
    const user = formGroup.get('userName')?.value ?? '';
    const password = formGroup.get('password')?.value ?? '';
    if (user.trim() + password.trim()) {
        return user !== password ? null : {equalsUserPassword: true} 
    }

    return null

}