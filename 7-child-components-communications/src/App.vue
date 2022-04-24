<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <CmpA :title="componentATitle" @change-title="componentBTitle = $event" :run="runFunction"/>
      </div>
      <div class="col">
        <CmpB :title="componentBTitle" @change-title="componentATitle = $event" @run-event="runFunction = true"/>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <CmpC @change-title="setTitle('componentCTitle', $event)" :run="runFunction"/>
      </div>
      <div class="col">
        <CmpD @change-title="setTitle('componentDTitle', $event)" @run-event="runFunction = true"/>
      </div>
    </div>
  </div>
</template>

<script>
import CmpA from "@/components/CmpA"
import CmpB from "@/components/CmpB"

import CmpC from "@/components/CmpC"
import CmpD from "@/components/CmpD"

export default {
  components: {
    CmpA,
    CmpB,
    CmpC,
    CmpD
  },
  data() {
    return {
      componentATitle: "Component A",
      componentBTitle: "Component B",
      runFunction: false,
      componentCTitle: "Component C",
      componentDTitle: "Component D",
    }
  },
  provide() {
    return {
      componentCTitle : this.componentCTitle,
      componentDTitle : this.componentDTitle,
    }
  },
  methods : {
    setTitle(componentRef, value){
      console.log(componentRef, value)
      this[componentRef] = value;
      // this.$set(this.providedData, componentRef, value);

      this.$forceUpdate();
    }
  },
  watch: {
    runFunction(isRun) {
      if (isRun) {
        setTimeout(() => {
          this.runFunction = false;
        }, 100)
        // this.$nextTick(() => this.runFunction = false)
      }
    }
  }
}
</script>
