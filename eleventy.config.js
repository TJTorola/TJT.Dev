const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const pluginNavigation = require('@11ty/eleventy-navigation');
const pluginBundle = require('@11ty/eleventy-plugin-bundle');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');

module.exports = function (config) {
  config.addPassthroughCopy({
    './public/': '/',
  });

  config.addPlugin(pluginRss);
  config.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });
  config.addPlugin(pluginNavigation);
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(pluginBundle);

  config.addFilter('dateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      includes: '/includes',
      data: '/data',
      output: 'www',
    },
    pathPrefix: '/',
  };
};
