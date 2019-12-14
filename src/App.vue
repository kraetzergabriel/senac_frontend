<template>
  <div id="app">
    <div id="sup" class="columns">
      <div class="column is-8 is-offset-2">
        <br/>
        <button class="button is-primary" @click="openModal"> Adicionar Conta </button> 
        <button class="button is-secundary" @click="consult"> Consultar total </button> 
      </div>   
      <br/>
      
    </div> 
    <div class="column is-8 is-offset-2">
        <table class="table is-bordered">
          <tr>
            <th>Despesa</th>
            <th>Total</th>
          </tr>
          <tr v-for="t in totalConta" :key="t">
            <td> {{t.despesa}} </td>      
            <td> {{t.total}} </td>
          </tr>
        </table>
      </div>      
    <conta
        :ativo="ativo"
        :titulo="'Adicionar Conta a Pagar'"
        :pessoas="pessoas"
        :tiposDespesas="tiposDespesas"
        @close="ativo=false" 
        @salvar="salvar">
    </conta>  
  </div>
</template>

<script>
import Conta from '@/components/Conta'
import axios from 'axios'
export default {
  name:'app',
  components: {
    Conta
  },
  data() {
    return {
      pessoas: [],
      tiposDespesas: [],
      contas:[],
      totalConta:[],
      ativo: false,
    }
  },
  methods : {
    openModal: function(){
      this.ativo = true;
      axios.get("http://localhost:8080/pessoa").then(pessoas =>{
        this.pessoas = pessoas.data;
        axios.get("http://localhost:8080/despesa").then( tiposDespesas =>{
          this.tiposDespesas = tiposDespesas
          this.ativo = true;
        })
      })      

    },
    salvar:function(pessoa, tipoDespesa, dataEmissao, dataVencimento, valor, dataPagamento){
      this.ativo = false;
      const contaPagar = {
        tipoDespesa: tipoDespesa,
        dataEmissao: dataEmissao,
        pessoa: pessoa,
        dataVencimento: dataVencimento,
        valor: valor,
        dataPagamento: dataPagamento
      }
      axios.post("http://localhost:8080/conta", contaPagar).then(() => {

      })
    },
    consult:function(){
      axios.get().then(response =>{
        this.totalConta = response.data
      })
    }
  }
}

</script>
