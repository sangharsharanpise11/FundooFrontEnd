// import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
// import { Directive, Input } from '@angular/core';
// import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

// @Directive({
//     selector:'[appConfirmEqualValidator]',
//     providers:[{
//         provide:NG_VALIDATORS, //all the validators
//         useExisting:confirmEqualValidatorDirective,
//         multi:true// tell angular that we are using custom validators
//     }]   
// })
// export class confirmEqualValidatorDirective implements Validator
// {
//     @Input() appConfirmEqualValidator:string
//     validate(control :AbstractControl):{[key:string]:any}|null{
//         const controlToCampare=controlNameBinding.parent.get(this.appConfirmEqualValidator);
//     if(controlToCampare && controlToCampare.value !== control.value)
//     {
//         return{'notEqual':true};
//     }
//     return null;
//     }

    
// }