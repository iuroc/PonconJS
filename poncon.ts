/**
 * @author 欧阳鹏
 * https://apee.top
 */
class Poncon {
    private pages = {}
    private pageNames: string[] // 页面列表
    /**
     * 切换页面显示
     * @param target 页面标识
     */
    private changeView(target: string) {
        if (!target) {
            return
        }
        document.querySelectorAll<HTMLElement>('.poncon-page').forEach((dom: HTMLElement) => {
            dom.style.display = 'none'
        })
        var dom = document.querySelector<HTMLElement>(`.poncon-${target}`) as HTMLElement
        dom.style.display = ''
    }
    /**
     * 设置页面名称列表
     * @param pageNames 页面名称列表
     */
    setPageList(pageNames: string[]): void {
        pageNames.forEach(target => {
            var dom = document.querySelector(`.poncon-${target}`)
            this.pages[target] = {
                dom: dom,
                event: (() => { })
            }
        })
        this.pageNames = pageNames
    }

    /**
     * 配置页面
     * @param target 页面标识
     * @param func 页面载入事件
     */
    setPage(target: string, func?: () => void) {
        if (!target) {
            return
        }
        var dom = document.querySelector(`.poncon-${target}`)
        this.pages[target] = {
            dom: dom,
            event: func || (() => { })
        }
    }
    /**
     * 开启路由系统
     */
    start() {
        var _this = this
        window.addEventListener('hashchange', function (event) {
            var hash = new URL(event.newURL).hash
            _this.loadTarget(hash)
        })
        this.loadTarget()
    }
    /**
     * 切换页面并执行页面事件
     * @param hash 页面标识
     */
    private loadTarget(hash?: string) {
        var target: string = this.getTarget(hash)
        var dom = this.getDom(target)
        var args: string[] = this.getArgs(hash)
        this.changeView(target)
        this.pages[target].event(target, dom, args)
    }
    /**
     * 获取页面参数列表
     * @param hash 网址Hash
     * @returns 页面参数列表
     */
    private getArgs(hash?: string): string[] {
        var strs: string[] = (hash || location.hash).split('/')
        if (strs.length < 3) {
            return []
        }
        return strs.slice(2)
    }
    /**
     * 获取当前页面标识, 支持自动矫正
     * @param hash 网址hash
     * @returns 页面标识
     */
    getTarget(hash?: string): string {
        var strs: string[] = (hash || location.hash).split('/')
        var target: string = strs[1] || ''
        // target不合法或者不在白名单
        if (target.search(/^\w+$/) != 0 || this.pageNames.indexOf(target) == -1) {
            history.replaceState({}, '', `${location.pathname}`)
            return 'home'
        }
        return target
    }
    /**
     * 获取页面DOM
     * @param target 页面标识
     * @returns 页面DOM元素
     */
    private getDom(target: string): any {
        return document.querySelector(`.poncon-${target}`)
    }
}