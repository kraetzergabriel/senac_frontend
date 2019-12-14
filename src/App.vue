<template>
  <div id="app">
    <div id="sup" class="columns">
      <div class="column is-8 is-offset-2">
        <br/>
        <button class="button is-primary" @click="openModal"> Adicionar Conta </button> 
        <button class="button is-secundary" @click="openModal"> Consultar total </button> 
      </div>      
    </div>

    <div class="columns">
      <table class="table is-bordered">
        <tr>
          <th>Pessoa</th>
          
        </tr>
        <tr v-for="c in contas" :key="c.codigo">
          <td>{{c.nome}}</td>

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
      ativo: false,
    }
  },
  beforeMounted(){
    
  },
  methods : {
    openModal: function(){

      this.pessoas.push({codigo: 1, nome: "Gabriel"});
      
      this.ativo = true;
      axios.get("").then(pessoas =>{
        this.pessoas = pessoas.data;
        axios.get("").then( tiposDespesas =>{
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

      alert(contaPagar)

      axios.post("", contaPagar).then(() => {

      })
    }
  }
}

</script>
