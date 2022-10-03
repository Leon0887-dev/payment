import {  FormGroup } from "@angular/forms";


export function dateValidator(formGroup: FormGroup){
    const dateForm = formGroup.get('paymentDate')?.value ?? '';
    const date = new Date();

    if( dateForm >= date ){
        date.toDateString().replace('/','');

        // date[0] //03
        // date[1] //10
        // date[2] // 2022


        // date[0] > dateNow[0] 
        // date[1] > datenow[1]

        return {date: true}
    }

    return null
    

}