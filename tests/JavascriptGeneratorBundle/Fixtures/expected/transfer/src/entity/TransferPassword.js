import { Entity } from '@paysera/http-client-common';

import DateFactory from '../service/DateFactory';

class TransferPassword extends Entity {
    constructor(data = {}) {
        super(data);
    }

    /**
     * @return {string}
     */
    getPassword() {
        return this.get('password');
    }

    /**
     * @param {string} password
     */
    setPassword(password) {
        this.set('password', password);
    }
}

export default TransferPassword;
