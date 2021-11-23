<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2 header">laptimes (sec)</div>
            <div class="col"><input type="text" class="form-control editable" id="LaptimesValue"></div>
             <div class="col-sm-2 header">Tank capacity (liter)</div>
            <div class="col"><input type="text" class="form-control editable" id="TankCapacity"></div>
        </div>
    </div>
    <br/>
    <div class="container">
        <div class="row">
            <div class="col-sm-2">&nbsp;</div>
            <div class="col-sm-2 header">Time (sec)</div>
            <div class="col-sm-2 header">Description</div>
            <div class="col-sm-2 header">Lap count</div>
            <div class="col-sm-2 header">Consumption (liters)</div>
            <div class="col-sm-2 header">Service (liters)</div>
        </div>
        <div class="row">
            <div class="col-sm-2 header">Race total time (sec)</div>
            <div class="col-sm-2"><input type="text" class="form-control editable" id="TotalRaceTime"></div>
            <div class="col-sm-2 data">01h30:00</div>
            <div class="col-sm-2 data">TODO<!-- Estimated lap time that will be run --></div> 
            <div class="col-sm-2 data">TODO<!-- Estimated consumption --></div>
            <div class="col-sm-2 data">TODO<!-- Estimated service --></div>
        </div>
        <div class="row">
            <div class="col-sm-2 header">Race half time (sec)</div>
            <div class="col-sm-2 data">TODO<!-- computed from total race time --></div>
            <div class="col-sm-2 data">00h45:00</div>
            <div class="col-sm-2 data">TODO<!-- Estimated lap time that will be run --></div> 
            <div class="col-sm-2 data">TODO<!-- Estimated consumption --></div>
            <div class="col-sm-2 data">TODO<!-- Estimated service --></div>
        </div>
        <div class="row">
            <div class="col-sm-2 header">Race 60% (sec)</div>
            <div class="col-sm-2 data">TODO<!-- computed from total race time --></div>
            <div class="col-sm-2 data">00h54:00</div>
            <div class="col-sm-2 data">TODO<!-- Estimated lap time that will be run --></div> 
            <div class="col-sm-2 data">TODO<!-- Estimated consumption --></div>
            <div class="col-sm-2 data">TODO<!-- Estimated service --></div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/styles/computationgrid.css';
</style>