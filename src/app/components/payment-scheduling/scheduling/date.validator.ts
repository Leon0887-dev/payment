import {  FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { AbstractControl } from "@angular/forms";


export function dateValidator(control: AbstractControl){
    const dateForm = control.value ?? '';
    const date = moment().format('DD/MM/YYYY');

    if( dateForm < date ){
        return {date: true}
        
    }
    
    return null
}

export function dateValidatorEdit(control: AbstractControl){
    const dateForm = control.value ?? '';
    
    const date = moment().format('DD/MM/YYYY');
    if( dateForm < date ) return {date: true}

    const dateFuture = moment(dateForm).isAfter(dateForm)
    if(dateFuture) return {date: true}
    
    
    return null
}