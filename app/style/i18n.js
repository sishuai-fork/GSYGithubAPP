/**
 * Created by guoshuyu on 2017/11/7.
 */
import {NativeModules} from 'react-native';
import I18n from 'react-native-i18n'

const {RNI18n} = NativeModules;

I18n.fallbacks = true;

I18n.defaultLocale = "zh-CN";


I18n.translations = {
    'en': {
        appName: 'GSYGitHubApp',
        netError: 'network error',
        netTimeout: 'network timeout',
        ok: 'ok',
        cancel: 'cancel',
        tabRecommended: 'Recommend',
        tabDynamic: 'Dynamic',
        tabMy: 'My',
        setting: 'setting',
        daysAgo: 'daysAgo',
        hoursAgo: 'hoursAgo',
        minutesAgo: 'minutesAgo',
        justNow: 'justNow',
        UserName: 'UserName',
        Password: 'Password',
        Login: 'Login',
        LoginOut: 'LoginOut',
        LoginNameTip: 'username can\'t not be empty',
        LoginPWTip: 'password can\'t not be empty',
        LoginFailTip: 'login fail',
        refreshing: 'refreshing...',
        loading: 'loading...',
        loadMoreing: 'loading...',
        loadMoreEnd: 'no more',
        doublePressExit: 'Press again to Exit',
        userInfoNoting: 'nothing',
        staredText: 'stared',
        FollowersText: 'follower',
        FollowedText: 'followed',
        repositoryText: 'repository',
        personDynamic: 'Activity',
        trendDay: 'Day',
        trendWeek: 'Week',
        trendMonth: 'Month',
        trendAll: 'All',
        search: 'search',
        best_match: 'Best match',
        stars: 'stars',
        forks: 'forks',
        updated: 'updated',
        filerType: 'Type',
        filterSort: 'Sort',
        filterLanguage: 'Language',
        desc: 'Desc',
        asc: 'Asc',
        Java: 'Java',
        Kotlin: 'Kotlin',
        Objective_C: 'Objective-C',
        Swift: 'Swift',
        JavaScript: 'JavaScript',
        PHP: 'PHP',
        Go: 'Go',
        C__: 'C++',
        C: 'C',
        HTML: 'HTML',
        CSS: 'CSS',
        unknown: 'unknown',
        created_at: "Created at",
        forked_at: "Forked from",
        latest_update: "Latest update",
        latest_commit: "Latest commit",
        reposActivity: "activity",
        reposPush: "Push",
        reposReadme: "readme",
        reposFile: "files",
        reposIssue: "Issues",
        issueInfo: "Info",
        issueComment: "Reply",
        issueCommentDelete: "Delete",
        issueCommentEdit: "Edit",
        issueEdit: "Edit",
        createIssue: "Create",
        issueClose: "Close",
        issueOpen: "Open",
        issueInputTitleTip: "enjoy yourself",
        issueInputTip: "enjoy yourself",
        closeIssue: "Close？",
        openIssue: "Open？",
        closeIssueTip: "Close？",
        openIssueTip: "Open？",
        commentsIssue: "Comment",
        editIssue: "Edit Issue",
        reposStar: "Star",
        reposUnStar: "UnStar",
        reposWatcher: "Watcher",
        reposUnWatcher: "UnWatcher",
        reposRelease: "Release",
        reposFork: "Fork",
        reposForked: "you had Forked",
        reposForkedTip: "Fxxx Sure?",
        reposTag: "Tag",
        notifyUnread: "UnRead",
        notifyParticipating: "Part",
        notifyAll: 'All',
        notifyType: 'Type:%{option1}，State:%{option2}',
        unread: 'unread',
        readed: 'readed',
        notify: 'notify',
        fileNotSupport: 'Not Support',
        searchRepos: "Repository",
        searchUser: "User",
        issueAllText: "All",
        issueOpenText: "Open",
        issueCloseText: "Close",
        issueYoursText: "Yours",
        hadCopy: "Copy Link",
        filterCreated: "created",
        filterUpdated: "updated",
        filterPushed: "pushed",
        filterFullName: "name",
        forkSuccess: "Fxxx Success",
        forkFail: "Fxxx Fail",
        listEmpty:'Empty(oﾟ▽ﾟ)o  '
    },
    'zh-CN': {
        appName: 'GSYGitHubApp',
        netError: '网络错误',
        netTimeout: '网络超时',
        ok: '确定',
        cancel: '取消',
        tabRecommended: '推荐',
        tabDynamic: '动态',
        tabMy: '我的',
        setting: '设置',
        daysAgo: '天前',
        hoursAgo: '小时前',
        minutesAgo: '分钟前',
        justNow: '刚刚',
        UserName: '用户名',
        Password: '密码',
        Login: '登陆',
        LoginOut: '退出登陆',
        LoginNameTip: '用户名不能为空',
        LoginPWTip: '密码不能为空',
        LoginFailTip: '登陆失败',
        refreshing: '刷新中...',
        loadMoreing: '正在加载更多···',
        loadMoreEnd: '加载完了哟',
        loading: '加载中...',
        doublePressExit: '双击退出',
        userInfoNoting: 'Ta什么都没留下',
        staredText: '星标',
        FollowersText: '粉丝',
        FollowedText: '关注',
        repositoryText: '仓库',
        personDynamic: '个人动态',
        trendDay: '今日',
        trendWeek: '本周',
        trendMonth: '本月',
        trendAll: '全部',
        search: '搜索',
        best_match: '最匹配',
        stars: 'star',
        forks: 'forks',
        updated: '更新',
        desc: '倒叙',
        asc: '正序',
        filerType: '类型',
        filterSort: '排序',
        filterLanguage: '语言',
        Java: 'Java',
        Kotlin: 'Kotlin',
        Objective_C: 'Objective-C',
        Swift: 'Swift',
        JavaScript: 'JavaScript',
        PHP: 'PHP',
        Go: 'Go',
        C__: 'C++',
        C: 'C',
        HTML: 'HTML',
        CSS: 'CSS',
        unknown: 'unknown',
        created_at: "创建于",
        forked_at: "Forked from",
        latest_update: "最后更新",
        latest_commit: "最后提交",
        reposActivity: "动态",
        reposPush: "提交",
        reposReadme: "详情信息",
        reposFile: "文件",
        reposIssue: "Issues",
        issueInfo: "说明",
        issueComment: "回复",
        issueCommentDelete: "刪除",
        issueCommentEdit: "编辑",
        issueEdit: "编辑",
        issueClose: "关闭",
        issueOpen: "打开",
        issueInputTip: "请输入答复哟",
        issueInputTipTitle: "请输入标题",
        closeIssue: "关闭？",
        openIssue: "打开？",
        closeIssueTip: "你确定要关闭这个Issue吗？",
        openIssueTip: "你确定要打开这个Issue吗？",
        commentsIssue: "提交回复",
        editIssue: "编辑",
        createIssue: "创建",
        reposStar: "Star",
        reposUnStar: "UnStar",
        reposWatcher: "Watcher",
        reposUnWatcher: "UnWatcher",
        reposRelease: "版本",
        reposFork: "Fork",
        reposForked: "你已经Fxxx过了(⊙o⊙)",
        reposForkedTip: "你确定要Fxxx Ta吗?",
        reposTag: "标记",
        notifyUnread: "未读",
        notifyParticipating: "参与",
        notifyAll: '所有',
        notifyType: '类型：%{option1}，状态：%{option2}',
        unread: '未读',
        readed: '已读',
        notify: '通知',
        fileNotSupport: '预览文件失败，可能文件类型不支持预览。',
        searchRepos: "仓库",
        searchUser: "用户",
        issueAllText: "全部",
        issueOpenText: "打开",
        issueCloseText: "关闭",
        issueYoursText: "我的",
        hadCopy: "已经复制到粘贴板",
        filterCreated: "创建",
        filterUpdated: "更新",
        filterPushed: "提交",
        filterFullName: "名称",
        forkSuccess: "Fxxx 成功了喔",
        forkFail: "Fxxx 没能成功呢",
        listEmpty:'暂时还没找到什么(oﾟ▽ﾟ)o  '
    }
};

export const changeLocale = function (multilingual) {
    if (multilingual === 'local' || !multilingual) {
        I18n.locale = (RNI18n && RNI18n.locale) ? RNI18n.locale.replace(/_/, '-') : ''
    } else {
        I18n.locale = multilingual
    }

    // for ios
    if (I18n.locale.indexOf('zh-Hans') !== -1) {
        I18n.locale = 'zh-CN'
    } else if (I18n.locale.indexOf('zh-Hant') !== -1 || I18n.locale === 'zh-HK' || I18n.locale === 'zh-MO') {
        I18n.locale = 'zh-CN'
    }
};

export default function (name, option1, option2) {
    return I18n.t(name, option1, option2)
}