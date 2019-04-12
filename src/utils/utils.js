export default {
    formateDate(time) {
        if (!time) {
            return '';
        }
        let date = new Date(time);
        return date.getFullYear()+'-'+ (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    },
    /**
     * 
     * @param {*} data 表格数据
     * @param {*} callback 下一页触发回调
     */
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            current: data.result.page, // 当前显示
            pageSize: data.result.page_size, // 每页条数
            total: data.result.total, // 总页数
            showTotal: () => {
                return `共${data.result.total}条`
            },
            showQuickJumper: true // 快速跳转到那页
        }
    }
}