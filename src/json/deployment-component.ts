export class DeploymentComponents {
  resourceMap = {
    static: [
      "kafka",
      "redis",
      "postgres",
      "kafkaredis",
      "kafkapostgres",
      "redispostgres",
      "all"
    ],
    modular: [
      "wmdemand",
      "pbdemand",
      "tcdemand",
      "rmswmqty",
      "telemetry",
      "streamadapter",
      "cache",
      "demanddal",
      "wmsupply",
      "dscoadapter",
      "rmsprocessor",
      "rmsprocessorhold",
      "ertmadapter",
      "epmadapter",
      "supplydal",
      "comdemand",
      "omsdemand",
      "fpdemand",
      "returns-demand-adapter",
      "transfers-demand-adapter",
      "streamconsumer",
      "cron",
      "applicationlb",
      "publicsplitter",
      "pvtsplitter",
      "proxyservice",
      "proxynlb",
      "publicsplitternlb",
      "pvtsplitternlb",
      "networklb",
      "classicelb",
      "notomcat",
      "genericpostadapter-nrhl",
      "genericpostadapter-smrt",
      "genericpostadapter-smrt-v2",
      "genericpostadapter-oms",
      "protonproducer-sku",
      "protonproducer-skuloc",
      "solr-consumer",
      "solr-producer",
      "publicclientapi",
      "hold-removal-service",
      "internalclientapi",
      "publicclientapinlb",
      "internalclientapinlb",
      "hold-removal-service-nlb"
    ],
    modularservice: [
      "wmdemand",
      "pbdemand",
      "tcdemand",
      "rmswmqty",
      "telemetry",
      "streamadapter",
      "cache",
      "demanddal",
      "wmsupply",
      "dscoadapter",
      "rmsprocessor",
      "rmsprocessorhold",
      "ertmadapter",
      "epmadapter",
      "supplydal",
      "comdemand",
      "omsdemand",
      "fpdemand",
      "returns-demand-adapter",
      "transfers-demand-adapter",
      "streamconsumer",
      "cron",
      "applicationlb",
      "publicsplitter",
      "pvtsplitter",
      "proxyservice",
      "proxynlb",
      "publicsplitternlb",
      "pvtsplitternlb",
      "networklb",
      "classicelb",
      "notomcat",
      "publicforker",
      "forker",
      "genericpostadapter-nrhl",
      "genericpostadapter-smrt",
      "genericpostadapter-smrt-v2",
      "genericpostadapter-oms",
      "protonproducer-sku",
      "protonproducer-skuloc",
      "solr-consumer",
      "solr-producer",
      "publicclientapi",
      "hold-removal-service",
      "internalclientapi",
      "publicclientapinlb",
      "internalclientapinlb",
      "hold-removal-service-nlb"
    ],
    forker: ["forker"],
    publicforker: ["publicforker"],
    cron: ["CacheRefresh-Cron", "Monitoring-Cron"],
    solr: ["solr"],
    grafana: ["influx", "grafana", "influxBackupCron"],
    grafanamysql: ["grafanaStateMysqlDb"],
    postRecon: ["postRecon"],
    postReconTc: ["postReconTc"],
    statusCheckApi: ["statusCheckApi"],
    comapi: ["comapi"],
    dbschema: ["dbschema"],
    initialload: [
      "com",
      "fp",
      "tc",
      "wm",
      "dsco",
      "transfers",
      "pb",
      "cache",
      "oms",
      "pbproxy"
    ],
    elbwarmup: ["elb"],
    functionaltest: ["redis", "cache", "clientapi"],
    inventoryIntegrityTool: ["inventoryIntegrityTool"],
    goldengatekogg: ["GoldenGateKafka", "gg"],
    gitlabrunner: ["gitlabrunner"],
    historyApiUi: ["historyApiUi"],
    historyApiRecorder: ["historyApiRecorder"],
    all: ["all"]
  };
}
