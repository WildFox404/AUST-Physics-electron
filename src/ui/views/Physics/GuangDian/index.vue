<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import {VueLatex} from 'vatex'
defineComponent({
  components: {
    VueLatex
  }
});

const table1_key_data = ["365", "405", "436", "546", "577"]
const table1_hz_data = ["8.214", "7.408", "6.879", "5.490", "5.196"]
const table1_value_data = ref(["", "", "", "", ""])
const U_data = ["0.0", "0.2", "0.4", "0.6", "0.8", "1.0", "1.2", "1.4", "1.6", "1.8"]
</script>

<template>
  <div class="p-8" id="router-view">
    <ul class="steps steps-vertical w-full">
      <li class="step step-primary ">
        <div class="flex items-center justify-between flex-row w-full">
          <div class="overflow-x-auto bg-base-200 gap-8 rounded-lg flex-1 flex flex-col p-4 ">
            <div class="flex gap-16">
              <div>表格一</div>
              <div>距离L = 40cm</div>
              <div class="flex-1">
                光阑孔径<vue-latex :expression="'\\varphi'" /> = 8mm
              </div>
            </div>
            <table class="table bg-base-100">
              <tbody>
                <!-- row 1 -->
                <tr class="hover">
                  <th class="text-center">波长<vue-latex :expression="'\\frac{\\lambda}{nm}'" /></th>
                  <th class="text-center" v-for="item in table1_key_data" :key="item">{{ item }}</th>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                  <th class="text-center">频率<vue-latex :expression="'\\frac{v}{10^{14} Hz}'" /></th>
                  <th class="text-center" v-for="item in table1_hz_data" :key="item">{{ item }}</th>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                  <th class="text-center">截止电压<vue-latex :expression="'\\frac{Uoi}{V}'" /></th>
                  <th class="text-center" v-for="(_, index) in table1_value_data" :key="index">
                    <input type="text" v-model="table1_value_data[index]" placeholder="" class="input input-sm input-bordered w-full max-w-xs" />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
      <li class="step step-primary">
        <div class="flex items-center flex-row gap-8 justify-between w-full">
          <div class="overflow-x-auto bg-base-200 gap-8 rounded-lg flex-1 flex flex-col p-4">
            <div class="flex gap-16">
              <div>表格二</div>
              <div>距离L = 40cm</div>
              <div class="flex-1 text-primary">
                光阑孔径<vue-latex :expression="'\\varphi'" /> = 8mm
              </div>
            </div>
            <table class="table bg-base-100">
              <tbody>
                <!-- row 1 -->
                <tr class="hover">
                  <th class="text-center text-primary">365nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(0, 5)" :key="item">{{ item }}</th>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                  <th class="text-center text-primary">365nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="例:55.5" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="-11" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="例:55.5" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="-11" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                  <th class="text-center text-primary">365nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(5)" :key="item">{{ item }}</th>
                </tr>
                <tr class="hover">
                  <th class="text-center text-primary">365nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
              </tbody>
            </table>
            <table class="table bg-base-100">
              <tbody>
                <!-- row 1 -->
                <tr class="hover">
                  <th class="text-center text-primary">546nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(0,5)" :key="item">{{ item }}</th>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                  <th class="text-center text-primary">546nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                  <th class="text-center text-primary">546nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(5)" :key="item">{{ item }}</th>
                </tr>
                <tr class="hover">
                  <th class="text-center text-primary">546nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
      <li class="step mt-8">
        <div class="flex items-center flex-row gap-8 justify-between w-full">
          <div class="overflow-x-auto bg-base-200 gap-8 rounded-lg flex-1 flex flex-col p-4">
            <div class="flex gap-16">
              <div>表格三</div>
              <div>距离L = 40cm</div>
              <div class="flex-1 text-primary">
                光阑孔径<vue-latex :expression="'\\varphi'" /> = 4mm
              </div>
            </div>
            <table class="table bg-base-100">
              <tbody>
                <!-- row 1 -->
                <tr class="hover">
                  <th class="text-center text-primary">365nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(0,5)" :key="item">{{ item }}</th>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                  <th class="text-center text-primary">365nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                  <th class="text-center text-primary">365nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(5)" :key="item">{{ item }}</th>
                </tr>
                <tr class="hover">
                  <th class="text-center text-primary">365nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
              </tbody>
            </table>
            <table class="table bg-base-100">
              <tbody>
                <!-- row 3 -->
                <tr class="hover">
                  <th class="text-center text-primary">546nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(0,5)" :key="item">{{ item }}</th>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                  <th class="text-center text-primary">546nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                  <th class="text-center text-primary">546nm U(V)</th>
                  <th class="text-center" v-for="item in U_data.slice(5)" :key="item">{{ item }}</th>
                </tr>
                <tr class="hover">
                  <th class="text-center text-primary">546nm I(A)</th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                  <th class="text-center "><div class="flex items-center gap-2"><input type="text" placeholder="" class="input input-sm input-bordered w-24 max-w-xs" />e^<input type="text" placeholder="" class="input input-sm input-bordered w-12 max-w-xs" /></div></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
      <li class="step">
        <div class="mockup-code w-full text-left"> 
          <pre data-prefix="$"><code>计算结果</code></pre>
          <pre data-prefix=">" class="text-warning"><code>斜率K:</code></pre>
          <pre data-prefix=">" class="text-success flex items-center">
            <code><vue-latex :expression="'k= \\frac{h}{e} = \\frac{\\bigtriangleup U0}{\\bigtriangleup v} = tan(\\theta) = '"/></code>  
          </pre>
          <pre data-prefix=">" class="text-success flex items-center">
            <code>普朗克常数h为: </code>
          </pre>
          <pre data-prefix=">" class="text-success flex items-center">
            <code>电子电量e为: <vue-latex :expression="'J \\dot s'"/></code>
          </pre>
          <pre data-prefix=">" class="text-success flex items-center">
            <code>实验计算出的h为:</code>
          </pre>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
