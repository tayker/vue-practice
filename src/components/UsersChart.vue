<script>
import { Pie, mixins } from 'vue-chartjs';

export default {
    extends: Pie,
    mixins: [mixins.reactiveProp],
    name: 'UsersChart',
    props: ['chartData', 'options'],
    mounted() {
        this.renderChart(this.chartData, this.options);
    }
}
</script>

<style>

</style>
