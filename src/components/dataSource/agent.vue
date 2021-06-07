<template>
    <div>
        <Form :model="formLeft" label-position="right"  class="leftLabel leftInput">
            <FormItem label="客户端名:" :label-width="75">
                <Input v-model="formLeft.input1" maxlength="11"/>
            </FormItem>
            <FormItem label="客户端:" :label-width="65">
                <Input v-model="formLeft.input2" maxlength="11"/>
            </FormItem>
            <FormItem label="Message:" :label-width="75">
                <Input v-model="formLeft.input3" maxlength="11"/>
            </FormItem>
        </Form>
        <Form :model="formRight" label-position="right" :label-width="100" class="leftLabel leftInput">
            <FormItem label="RabbitMQ队列" :label-width="120">
                <Input v-model="formRight.input1"/>
            </FormItem>
            <FormItem label="Title name">
                <Input v-model="formRight.input2"/>
            </FormItem>
            <FormItem label="Aligned title">
                <Input v-model="formRight.input3"/>
            </FormItem>
        </Form>
        <Form :model="formTop" label-position="right" :label-width="100" class="leftLabel leftInput">
            <FormItem label="Title">
                <Input v-model="formTop.input1"/>
            </FormItem>
            <FormItem label="Title name">
                <Input v-model="formTop.input2"/>
            </FormItem>
            <FormItem label="Aligned title">
                <Input v-model="formTop.input3"/>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        }
    }
</script>

<style scoped>
    .leftInput{
        width: 40%;
        height: 40%;
    }
    .leftLabel{
        margin-left: 10px;
    }
</style>