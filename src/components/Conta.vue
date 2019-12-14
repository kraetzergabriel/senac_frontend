<template>
<div class="modal" :class="{'is-active' : ativo}">
    <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{titulo}}</p>
                <button @click="$emit('close')" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <div class="control" >
                        <label class="label">Pessoa</label>
                        <select class="select is-medium" v-model="pessoa">
                            <option v-for="p in pessoas" :key="p.codigo">
                                {{ p.nome }}
                            </option>
                        </select>
                    </div>

                    <div class="control">
                        <label class="label">Tipo Despesa</label>
                        <select class="select is-medium" v-model="tipoDespesa">
                            <option v-for="t in tiposDespesas" :key="t.codigo">
                                {{ t.nome }}
                            </option>
                        </select>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label"> Data Emissao</label>
                    <input type="date" class="date" id="dataEmissao" v-model="dataEmissao"  />
                </div>
                <div>
                    <label class="label"> Data Vencimento </label>
                    <input type="date" class="date" v-model="dataVencimento" />
                </div>
                <div>
                    <label class="label"> Data Pagamento</label>
                    <input type="date" class="date" v-model="dataPagamento"/>

                </div>
                <div>
                    <label for="" class="label"> Valor: </label>
                    <input type="number" step="0.01" v-model="valor"/>
                </div>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer"></slot>
                <button class="button is-success" @click="salvar">Salvar</button>
                <button class="button" @click="$emit('close')">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ativo:{
            type: Boolean,
            required: true
        },
        titulo:{
            type: String
        },
        pessoas: {
            type: Array
        },
        pessoa:{
            type: Object
        },
        tiposDespesas: {
            type: Array
        },
        tipoDespesa:{
            type: Object
        },
        dataEmissao:{
            type: Date
        },
        dataVencimento:{
            type: Date
        },
        valor:{
            type: Number
        },
        dataPagamento:{
            type: Date
        }
    },
    methods: {
        salvar() {
            this.$emit('salvar', this.pessoa, this.tipoDespesa, this.dataEmissao, this.dataVencimento, this.valor, this.dataPagamento);
        }
    }
}
</script>

<style>

</style>
