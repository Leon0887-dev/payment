import {  FormGroup } from "@angular/forms";


export function dateValidator(formGroup: FormGroup){
    const dateForm = formGroup.get('paymentDate')?.value ?? '';
    const date = new Date(dateForm);

    if( dateForm >= date ){
        return {date: true}
    }

    return null
    

}