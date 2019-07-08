<template>
    <div>
        <h1 class="text-success" style="text-align:left;">
            Now let me ask you :
        </h1>
        <h2>{{ currentQuestion.question }}</h2>
        <h1 class="text-success" style="text-align:left;">
            Choose the right answer：
        </h1>
        <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
        <div class="btnContainer">
            <b-button variant="danger">Submit</b-button>
            <b-button variant="success" @click="next">Next</b-button>
        </div>
    </div>
</template>

<script>
export default {
    //props中申明的变量用于接收父组件传递过来的值
    props: {
        next: Function,
        currentQuestion: Object
    }
};
</script>

<style scope>
.btnContainer button {
    margin-right: 20px;
}
.btnContainer {
    margin-top: 20px;
}
.list-group-item:hover {
    background-color: aliceblue;
}
.list-group-item {
    cursor: pointer;
    text-align: left;
}
</style>

