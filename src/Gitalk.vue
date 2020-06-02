<template>
  <div id="gitalk-container"></div>
</template>

<script>
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

export default {
  name: 'Gitalk',
  props: {
    config: {
      type: Object,
      required: false,
      default: null
    }
  },
  methods: {
    populateConfig(config) {
      if (!config) {
        config = {
          clientID: null,
          clientSecret: null,
          repo: null,
          owner: null,
          admin: null,
          id: null,
          number: null,
          labels: null,
          title: null,
          body: null,
          distractionFreeMode: null,
          language: null,
          perPage: null,
          pagerDirection: null,
          createIssueManually: null,
          proxy: null,
          flipMoveOptions: null,
          enableHotKey: null
        }
      } else {
        config.clientID = config.clientID || null;
        config.clientSecret = config.clientSecret || null;
        config.repo = config.repo || null;
        config.owner = config.owner || null;
        config.admin = config.admin || null;
        config.id = config.id || null;
        config.number = config.number || null;
        config.labels = config.labels || null;
        config.title = config.title || null;
        config.body = config.body || null;
        config.distractionFreeMode = config.distractionFreeMode || null;
        config.language = config.language || null;
        config.perPage = config.perPage || null;
        config.pagerDirection = config.pagerDirection || null;
        config.createIssueManually = config.createIssueManually || null;
        config.proxy = config.proxy || null;
        config.flipMoveOptions = config.flipMoveOptions || null;
        config.enableHotKey = config.enableHotKey || null;
      }
      return config;
    }
  },
  mounted() {
    let config = this.populateConfig(this.config);
    let gitalkGlobalConfig = this.populateConfig(this.$gitalkGlobalConfig);

    let gitalkConfig = {};

    gitalkConfig['clientID'] = config.clientID || gitalkGlobalConfig.clientID;
    gitalkConfig['clientSecret'] = config.clientSecret || gitalkGlobalConfig.clientSecret;
    gitalkConfig['repo'] = config.repo || gitalkGlobalConfig.repo;
    gitalkConfig['owner'] = config.owner || gitalkGlobalConfig.owner;
    gitalkConfig['admin'] = config.admin || gitalkGlobalConfig.admin;

    if (config.id || gitalkGlobalConfig.id) {
      gitalkConfig['id'] = config.id || gitalkGlobalConfig.id;
    }

    if (config.number || gitalkGlobalConfig.number) {
      gitalkConfig['number'] = config.number || gitalkGlobalConfig.number;
    }

    if (config.labels || gitalkGlobalConfig.labels) {
      gitalkConfig['labels'] = config.labels || gitalkGlobalConfig.labels;
    }

    if (config.title || gitalkGlobalConfig.title) {
      gitalkConfig['title'] = config.title || gitalkGlobalConfig.title;
    }

    if (config.body || gitalkGlobalConfig.body) {
      gitalkConfig['body'] = config.body || gitalkGlobalConfig.body;
    }

    if (config.distractionFreeMode || gitalkGlobalConfig.distractionFreeMode) {
      gitalkConfig['distractionFreeMode'] = config.distractionFreeMode || gitalkGlobalConfig.distractionFreeMode;
    }

    if (config.language || gitalkGlobalConfig.language) {
      gitalkConfig['language'] = config.language || gitalkGlobalConfig.language;
    }

    if (config.perPage || gitalkGlobalConfig.perPage) {
      gitalkConfig['perPage'] = config.perPage || gitalkGlobalConfig.perPage;
    }

    if (config.pagerDirection || gitalkGlobalConfig.pagerDirection) {
      gitalkConfig['pagerDirection'] = config.pagerDirection || gitalkGlobalConfig.pagerDirection;
    }

    if (config.createIssueManually || gitalkGlobalConfig.createIssueManually) {
      gitalkConfig['createIssueManually'] = config.createIssueManually || gitalkGlobalConfig.createIssueManually;
    }

    if (config.proxy || gitalkGlobalConfig.proxy) {
      gitalkConfig['proxy'] = config.proxy || gitalkGlobalConfig.proxy;
    }

    if (config.flipMoveOptions || gitalkGlobalConfig.flipMoveOptions) {
      gitalkConfig['flipMoveOptions'] = config.flipMoveOptions || gitalkGlobalConfig.flipMoveOptions;
    }

    if (config.enableHotKey || gitalkGlobalConfig.enableHotKey) {
      gitalkConfig['enableHotKey'] = config.enableHotKey || gitalkGlobalConfig.enableHotKey;
    }

    const gitalk = new Gitalk(gitalkConfig);

    gitalk.render('gitalk-container')
  }
};
</script>