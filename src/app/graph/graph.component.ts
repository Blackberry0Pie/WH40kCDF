import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor() { }

  	ngOnInit() {
  }

  // options
  legend: boolean = false;
  legendTitle: string = 'Countries';
  legendPosition: string = 'right';
  showLabels: boolean = true;
  animations: boolean = true;
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Minimum Wounds Dealt';
  yAxisLabel: string = '% Probability of mimimum wounds dealt';
  timeline: boolean = true;
  customColors: object = [];
  colorScheme = {
    domain: ['#332288', '#117733', '#882255', '#DDCC77', '#AA4499', '#44AA99', '#CC6677', '#88CCEE']
  };


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

   data = [
  {
    "name": "Gambia",
    "series": [
      {
        "value": 3022,
        "name": "0"
      },
      {
        "value": 2376,
        "name": "1"
      },
      {
        "value": 3215,
        "name": "2"
      },
      {
        "value": 3677,
        "name": "3"
      },
      {
        "value": 2494,
        "name": "4"
      },
      {
        "name": "5",
        "value": 5325
      },
      {
        "name": "6",
        "value": 5471
      },
      {
        "name": "7",
        "value": 5887
      }
    ]
  },
  {
    "name": "Spain",
    "series": [
      {
        "value": 5658,
        "name": "0"
      },
      {
        "value": 6246,
        "name": "1"
      },
      {
        "value": 2693,
        "name": "2"
      },
      {
        "value": 3326,
        "name": "3"
      },
      {
        "value": 4959,
        "name": "4"
      },
      {
        "name": "5",
        "value": 6702
      },
      {
        "name": "6",
        "value": 6371
      },
      {
        "name": "7",
        "value": 2673
      }
    ]
  },
  {
    "name": "Saudi Arabia",
    "series": [
      {
        "value": 3618,
        "name": "0"
      },
      {
        "value": 6447,
        "name": "1"
      },
      {
        "value": 5114,
        "name": "2"
      },
      {
        "value": 6849,
        "name": "3"
      },
      {
        "value": 3472,
        "name": "4"
      },
      {
        "name": "5",
        "value": 3946
      },
      {
        "name": "6",
        "value": 2099
      },
      {
        "name": "7",
        "value": 3300
      }
    ]
  },
  {
    "name": "Italy",
    "series": [
      {
        "value": 5579,
        "name": "0"
      },
      {
        "value": 5075,
        "name": "1"
      },
      {
        "value": 4180,
        "name": "2"
      },
      {
        "value": 3471,
        "name": "3"
      },
      {
        "value": 5736,
        "name": "4"
      },
      {
        "name": "5",
        "value": 4136
      },
      {
        "name": "6",
        "value": 5046
      },
      {
        "name": "7",
        "value": 6967
      }
    ]
  },
  {
    "name": "Sri Lanka",
    "series": [
      {
        "value": 2851,
        "name": "0"
      },
      {
        "value": 2663,
        "name": "1"
      },
      {
        "value": 3043,
        "name": "2"
      },
      {
        "value": 4376,
        "name": "3"
      },
      {
        "value": 4237,
        "name": "4"
      },
      {
        "name": "5",
        "value": 3783
      },
      {
        "name": "6",
        "value": 5185
      },
      {
        "name": "7",
        "value": 2322
      }
    ]
  },
  {
    "name": "Canada",
    "series": [
      {
        "value": 3722,
        "name": "0"
      },
      {
        "value": 1245,
        "name": "1"
      },
      {
        "value": 3625,
        "name": "2"
      },
      {
        "value": 5246,
        "name": "3"
      },
      {
        "value": 4352,
        "name": "4"
      },
      {
        "name": "5",
        "value": 1246
      },
      {
        "name": "6",
        "value": 1356
      },
      {
        "name": "7",
        "value": 1838
      }
    ]
  },
  {
    "name": "South Africa",
    "series": [
      {
        "value": 1356,
        "name": "0"
      },
      {
        "value": 5232,
        "name": "1"
      },
      {
        "value": 1563,
        "name": "2"
      },
      {
        "value": 503,
        "name": "3"
      },
      {
        "value": 3456,
        "name": "4"
      },
      {
        "name": "5",
        "value": 1345
      },
      {
        "name": "6",
        "value": 4567
      },
      {
        "name": "7",
        "value": 2467
      }
    ]
  },
  {
    "name": "Brazil",
    "series": [
      {
        "value": 4563,
        "name": "0"
      },
      {
        "value": 5535,
        "name": "1"
      },
      {
        "value": 6345,
        "name": "2"
      },
      {
        "value": 6399,
        "name": "3"
      },
      {
        "value": 5243,
        "name": "4"
      },
      {
        "name": "5",
        "value": 4656
      },
      {
        "name": "6",
        "value": 5234
      },
      {
        "name": "7",
        "value": 1546
      }
    ]
  }
  ]
}
