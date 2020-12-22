import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {

    strInput;

    handleChange( event ) {

        this.strInput = event.target.value;

    }

}