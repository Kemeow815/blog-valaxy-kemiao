/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/albums/': RouteRecordInfo<'/albums/', '/albums', Record<never, never>, Record<never, never>>,
    '/albums/minecraft': RouteRecordInfo<'/albums/minecraft', '/albums/minecraft', Record<never, never>, Record<never, never>>,
    '/albums/omori': RouteRecordInfo<'/albums/omori', '/albums/omori', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/music/': RouteRecordInfo<'/music/', '/music', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/policies/privacy': RouteRecordInfo<'/policies/privacy', '/policies/privacy', Record<never, never>, Record<never, never>>,
    '/posts/10021': RouteRecordInfo<'/posts/10021', '/posts/10021', Record<never, never>, Record<never, never>>,
    '/posts/10045': RouteRecordInfo<'/posts/10045', '/posts/10045', Record<never, never>, Record<never, never>>,
    '/posts/10733': RouteRecordInfo<'/posts/10733', '/posts/10733', Record<never, never>, Record<never, never>>,
    '/posts/10996': RouteRecordInfo<'/posts/10996', '/posts/10996', Record<never, never>, Record<never, never>>,
    '/posts/12779': RouteRecordInfo<'/posts/12779', '/posts/12779', Record<never, never>, Record<never, never>>,
    '/posts/13624': RouteRecordInfo<'/posts/13624', '/posts/13624', Record<never, never>, Record<never, never>>,
    '/posts/15688': RouteRecordInfo<'/posts/15688', '/posts/15688', Record<never, never>, Record<never, never>>,
    '/posts/15748': RouteRecordInfo<'/posts/15748', '/posts/15748', Record<never, never>, Record<never, never>>,
    '/posts/15799': RouteRecordInfo<'/posts/15799', '/posts/15799', Record<never, never>, Record<never, never>>,
    '/posts/15842': RouteRecordInfo<'/posts/15842', '/posts/15842', Record<never, never>, Record<never, never>>,
    '/posts/16107': RouteRecordInfo<'/posts/16107', '/posts/16107', Record<never, never>, Record<never, never>>,
    '/posts/18063': RouteRecordInfo<'/posts/18063', '/posts/18063', Record<never, never>, Record<never, never>>,
    '/posts/20412': RouteRecordInfo<'/posts/20412', '/posts/20412', Record<never, never>, Record<never, never>>,
    '/posts/21375': RouteRecordInfo<'/posts/21375', '/posts/21375', Record<never, never>, Record<never, never>>,
    '/posts/22037': RouteRecordInfo<'/posts/22037', '/posts/22037', Record<never, never>, Record<never, never>>,
    '/posts/22945': RouteRecordInfo<'/posts/22945', '/posts/22945', Record<never, never>, Record<never, never>>,
    '/posts/23021': RouteRecordInfo<'/posts/23021', '/posts/23021', Record<never, never>, Record<never, never>>,
    '/posts/23226': RouteRecordInfo<'/posts/23226', '/posts/23226', Record<never, never>, Record<never, never>>,
    '/posts/27531': RouteRecordInfo<'/posts/27531', '/posts/27531', Record<never, never>, Record<never, never>>,
    '/posts/27762': RouteRecordInfo<'/posts/27762', '/posts/27762', Record<never, never>, Record<never, never>>,
    '/posts/28536': RouteRecordInfo<'/posts/28536', '/posts/28536', Record<never, never>, Record<never, never>>,
    '/posts/28733': RouteRecordInfo<'/posts/28733', '/posts/28733', Record<never, never>, Record<never, never>>,
    '/posts/29196': RouteRecordInfo<'/posts/29196', '/posts/29196', Record<never, never>, Record<never, never>>,
    '/posts/38917': RouteRecordInfo<'/posts/38917', '/posts/38917', Record<never, never>, Record<never, never>>,
    '/posts/38964': RouteRecordInfo<'/posts/38964', '/posts/38964', Record<never, never>, Record<never, never>>,
    '/posts/42487': RouteRecordInfo<'/posts/42487', '/posts/42487', Record<never, never>, Record<never, never>>,
    '/posts/42580': RouteRecordInfo<'/posts/42580', '/posts/42580', Record<never, never>, Record<never, never>>,
    '/posts/45875': RouteRecordInfo<'/posts/45875', '/posts/45875', Record<never, never>, Record<never, never>>,
    '/posts/46640': RouteRecordInfo<'/posts/46640', '/posts/46640', Record<never, never>, Record<never, never>>,
    '/posts/48762': RouteRecordInfo<'/posts/48762', '/posts/48762', Record<never, never>, Record<never, never>>,
    '/posts/50710': RouteRecordInfo<'/posts/50710', '/posts/50710', Record<never, never>, Record<never, never>>,
    '/posts/52677': RouteRecordInfo<'/posts/52677', '/posts/52677', Record<never, never>, Record<never, never>>,
    '/posts/53662': RouteRecordInfo<'/posts/53662', '/posts/53662', Record<never, never>, Record<never, never>>,
    '/posts/54481': RouteRecordInfo<'/posts/54481', '/posts/54481', Record<never, never>, Record<never, never>>,
    '/posts/54787': RouteRecordInfo<'/posts/54787', '/posts/54787', Record<never, never>, Record<never, never>>,
    '/posts/56467': RouteRecordInfo<'/posts/56467', '/posts/56467', Record<never, never>, Record<never, never>>,
    '/posts/57692': RouteRecordInfo<'/posts/57692', '/posts/57692', Record<never, never>, Record<never, never>>,
    '/posts/58203': RouteRecordInfo<'/posts/58203', '/posts/58203', Record<never, never>, Record<never, never>>,
    '/posts/60486': RouteRecordInfo<'/posts/60486', '/posts/60486', Record<never, never>, Record<never, never>>,
    '/posts/61417': RouteRecordInfo<'/posts/61417', '/posts/61417', Record<never, never>, Record<never, never>>,
    '/posts/61712': RouteRecordInfo<'/posts/61712', '/posts/61712', Record<never, never>, Record<never, never>>,
    '/posts/61713': RouteRecordInfo<'/posts/61713', '/posts/61713', Record<never, never>, Record<never, never>>,
    '/posts/63616': RouteRecordInfo<'/posts/63616', '/posts/63616', Record<never, never>, Record<never, never>>,
    '/posts/63667': RouteRecordInfo<'/posts/63667', '/posts/63667', Record<never, never>, Record<never, never>>,
    '/posts/646': RouteRecordInfo<'/posts/646', '/posts/646', Record<never, never>, Record<never, never>>,
    '/posts/64856': RouteRecordInfo<'/posts/64856', '/posts/64856', Record<never, never>, Record<never, never>>,
    '/posts/64935': RouteRecordInfo<'/posts/64935', '/posts/64935', Record<never, never>, Record<never, never>>,
    '/posts/65382': RouteRecordInfo<'/posts/65382', '/posts/65382', Record<never, never>, Record<never, never>>,
    '/posts/cnb4valaxy': RouteRecordInfo<'/posts/cnb4valaxy', '/posts/cnb4valaxy', Record<never, never>, Record<never, never>>,
    '/posts/write-202503': RouteRecordInfo<'/posts/write-202503', '/posts/write-202503', Record<never, never>, Record<never, never>>,
    '/search/': RouteRecordInfo<'/search/', '/search', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
  }
}
