<script>
import { ref, reactive } from 'vue';

export default {
    name: 'AttendanceConfirmation',
    setup() {
        const name = ref('');
        const attending = ref(null);
        const details = reactive({
            invitedBy: '',
            mealPreference: '',
            allergies: [],
            chronicConditions: []
        });

        const allergyOptions = ['Gluten', 'Lactosa', 'Nueces'];
        const chronicConditionOptions = ['Diabetes', 'Hipertensión'];

        const addAllergy = (allergy) => {
            if (!details.allergies.includes(allergy)) {
                details.allergies.push(allergy);
            }
        };

        const addChronicCondition = (condition) => {
            if (!details.chronicConditions.includes(condition)) {
                details.chronicConditions.push(condition);
            }
        };

        const submitForm = () => {
            // Aquí se enviarán los datos al backend en el futuro
            console.log({
                name: name.value,
                attending: attending.value,
                details: attending.value ? details : null
            });
        };

        return {
            name,
            attending,
            details,
            allergyOptions,
            chronicConditionOptions,
            addAllergy,
            addChronicCondition,
            submitForm
        };
    }
}
</script>

<template>
    <div class="attendance-confirmation">
        <h3 class="section-title">Confirmación de Asistencia</h3>
        <p class="section-p">Por favor confirma tu asistencia antes del 2 de mayo.</p>
        <input
            type="text"
            v-model="name"
            placeholder="Ingresa tu nombre"
            class="attendance-input"
        />
        <div class="attending-options">
            <label>
                <input type="radio" v-model="attending" :value="true" />
                Confirmo mi asistencia
            </label>
            <label>
                <input type="radio" v-model="attending" :value="false" />
                No podré asistir
            </label>
        </div>
        <transition name="fade">
            <div v-if="attending" class="details-form">
                <label>
                    Invitado por:
                    <select v-model="details.invitedBy" class="attendance-select">
                        <option value="">Selecciona</option>
                        <option value="Novio">Novio</option>
                        <option value="Novia">Novia</option>
                    </select>
                </label>
                <label>
                    Alimentación:
                    <select v-model="details.mealPreference" class="attendance-select">
                        <option value="">Selecciona</option>
                        <option value="Standard">Standard</option>
                        <option value="Vegana">Vegana</option>
                    </select>
                </label>
                <label>
                    Alergias alimenticias:
                    <div class="checkbox-group">
                        <div v-for="option in allergyOptions" :key="option">
                            <label>
                                <input type="checkbox" :value="option" v-model="details.allergies" />
                                {{ option }}
                            </label>
                        </div>
                        <input
                            type="text"
                            placeholder="Otra alergia"
                            @keyup.enter="addAllergy($event.target.value); $event.target.value=''"
                            class="attendance-input"
                        />
                    </div>
                </label>
                <label>
                    Enfermedades Crónicas a considerar:
                    <div class="checkbox-group">
                        <div v-for="option in chronicConditionOptions" :key="option">
                            <label>
                                <input type="checkbox" :value="option" v-model="details.chronicConditions" />
                                {{ option }}
                            </label>
                        </div>
                        <input
                            type="text"
                            placeholder="Otra enfermedad"
                            @keyup.enter="addChronicCondition($event.target.value); $event.target.value=''"
                            class="attendance-input"
                        />
                    </div>
                </label>
            </div>
        </transition>
        <button @click="submitForm" class="attendance-button">Enviar</button>
    </div>
</template>

<style scoped>
.attendance-confirmation {
    text-align: center;
    margin: 2rem 0;
    padding: 0 1rem;
    font-family: var(--body-font);
}

.section-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.section-p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.attendance-input {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 1rem;
    transition: box-shadow 0.3s;
}

.attendance-input:focus {
    outline: none;
    box-shadow: 0 0 15px #fff;
}

.attending-options {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.attending-options label {
    margin: 0 10px;
}

.details-form {
    text-align: left;
    margin: 1rem 0;
    animation: fadeIn 0.5s ease-in-out;
}

.attendance-select {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.checkbox-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.checkbox-group label {
    margin-bottom: 0.5rem;
}

.attendance-button {
    background: linear-gradient(to right, var(--primary-color200), var(--primary-color400));
    color: white;
    border: none;
    padding: .6rem 2rem;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.attendance-button:hover {
    background: linear-gradient(to left, var(--primary-color200), var(--primary-color400));
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>