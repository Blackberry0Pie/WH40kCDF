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
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
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
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 2376,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 3215,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 3677,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 2494,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 5325
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 5471
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 5887
      }
    ]
  },
  {
    "name": "Spain",
    "series": [
      {
        "value": 5658,
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 6246,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 2693,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 3326,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 4959,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 6702
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 6371
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 2673
      }
    ]
  },
  {
    "name": "Saudi Arabia",
    "series": [
      {
        "value": 3618,
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 6447,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 5114,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 6849,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 3472,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 3946
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 2099
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 3300
      }
    ]
  },
  {
    "name": "Italy",
    "series": [
      {
        "value": 5579,
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 5075,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 4180,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 3471,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 5736,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 4136
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 5046
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 6967
      }
    ]
  },
  {
    "name": "Sri Lanka",
    "series": [
      {
        "value": 2851,
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 2663,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 3043,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 4376,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 4237,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 3783
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 5185
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 2322
      }
    ]
  },
  {
    "name": "Canada",
    "series": [
      {
        "value": 3722,
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 1245,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 3625,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 5246,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 4352,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 1246
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 1356
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 1838
      }
    ]
  },
  {
    "name": "South Africa",
    "series": [
      {
        "value": 1356,
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 5232,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 1563,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 503,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 3456,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 1345
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 4567
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 2467
      }
    ]
  },
  {
    "name": "Brazil",
    "series": [
      {
        "value": 4563,
        "name": "2016-09-21T08:31:06.302Z"
      },
      {
        "value": 5535,
        "name": "2016-09-24T04:00:59.014Z"
      },
      {
        "value": 6345,
        "name": "2016-09-14T23:56:47.051Z"
      },
      {
        "value": 6399,
        "name": "2016-09-14T10:10:20.819Z"
      },
      {
        "value": 5243,
        "name": "2016-09-18T01:06:19.457Z"
      },
      {
        "name": "2016-09-20T22:06:15.331Z",
        "value": 4656
      },
      {
        "name": "2016-09-14T15:50:35.990Z",
        "value": 5234
      },
      {
        "name": "2016-09-15T12:32:17.562Z",
        "value": 1546
      }
    ]
  }
]
}
