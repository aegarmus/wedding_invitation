<script>
import { config } from '../config/env.config';

export default {
    name: 'TransferDetails',
    setup() {
        const {
            bank,
            account,
            alias,
            type,
            rut,
            email
        } = config.bankAccount

        return {
            bank,
            account,
            alias,
            accountType: type,
            rut,
            email
        }
    }
}       
</script>

<template>
    <div class="transfer-details">
        <h3 class="section-title">Datos de Transferencia</h3>
        <p class="section-p">Banco: <strong>{{ bank }}</strong></p>
        <p class="section-p">Número de Cuenta: <strong>{{ account }}</strong></p>
        <p class="section-p">RUT: <strong>{{ rut }}</strong></p>
        <p class="section-p">Tipo de Cuenta: <strong>{{ accountType }}</strong></p>
        <p class="section-p" v-if="alias">Alias: <strong>{{ alias }}</strong></p>
        <p class="section-p" v-if="email">Email: <strong>{{ email }}</strong></p>
    </div>
</template>

<style scoped>
.transfer-details {
    text-align: center;
    margin: 2rem 0;
}

.section-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.section-p {
    font-size: 1rem;
    margin: 0.5rem 0;
}
</style>