import React, { useEffect } from 'react';
import Highcharts, { Chart } from 'highcharts';
import Typography from '@material-ui/core/Typography';
import { pxToRem } from '../utils/theme';

function Charts(props){

    const highchartsRender = () =>{

        let id = props.id;
        let confirmed = props.confirmed;
        let active = props.active;
        let recovered = props.recovered;

        console.log("inside Chart",confirmed);
        const chart = Highcharts.chart(`${id}`,{
            chart:{
                type: 'column',
                backgroundColor: 'rgb(42,63,77)',
            },
            title: 'XYZ',
            xAxis:{
                categories: ['confirmed','active','recovered'],

                labels:{
                    rotation: 0,
                    style :{
                        fontSize: '0.6rem',
                        color:'#FFFFFFA6',
                    }
                },
                tickLength: 0,
            },
            yAxis: {
                title:'',
                alignTicks: 0,
                gridLineWidth: 0,
                labels: {
                    enabled:false,
                }
            },
            plotOptions:{
                column:{
                    dataLabels:{
                        enabled: true,
                        style:{
                            fontSize:'0.6rem',
                            fontWeight:'light',
                            color:'#FFFFFFA6',
                            textOutline: 0
                        },
                        // formatter(){
                        //     return `{this.point.y}`;
                        // }                
                        
                    }
                }
            },
            tooltip:{
                enabled: false,
            },
            credits:{
                enabled: false,
            },
            legend:{
                enabled: false,
            },
            series: [{data: [{
                        y: Number(confirmed),
                        
                    },
                    {
                        y:Number(active),
                        color: 'rgb(255,172,64)',
                        borderColor: 'rgb(255,172,64)'
                    }, 
                    {
                        y: Number(recovered),
                        color: 'green',
                        borderColor: 'green',
                    }
                    ],
                    crisp: false,
                    showInLegend: false,
                    //data: p1 ,
                    color:'#5DAAE0',
                    borderColor:'#5DAAE0',
    
                }
            ]
        });
        chart.setSize(window.innerWidth/4.8,window.innerHeight/2.7 );
        return chart;
    }
    useEffect(()=>{
        highchartsRender();
        window.addEventListener('resize',highchartsRender);
    },[]);

    return(
        <>
            <div id = {`${props.id}`} confirmed = {`${props.confirmed}`} active = {`${props.active}`} recovered = {`${props.recovered}`} style={{width: '22rem', height:'17rem',overflow:'visible'}} /> 
        </>
    )
};
export default Charts;
