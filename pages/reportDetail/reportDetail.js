Page({
    data: {
        info: [],
        detail: {},
    },
    onLoad(option) {
        if (option && option.type) {
            const info = [
                // 生活垃圾日报
                { label: '生活垃圾分类管理工作会议次数', id: 'meetingTimes', unit: '次', value: 'meeting_times', show: option.type === '1' },
                { label: '生活垃圾分类会议主持人', id: 'meetingHost', unit: '', value: 'meeting_host', show: option.type === '1' },
                { label: '生活垃圾分类会议具体事项', id: 'meetingContent', unit: '', value: 'meeting_content', show: option.type === '1' },
                { label: '自测、巡查次数', id: 'selfInspectionTimes', value: 'self_inspection_times', unit: '次', show: option.type === '1' },
                { label: '发现存在问题', id: 'selfInspectionProblems', value: 'self_inspection_problems', unit: '个', show: option.type === '1' },
                { label: '主要涉及问题', id: 'selfInspectionContent', value: 'self_inspection_content', unit: '', show: option.type === '1' },
                { label: '宣传次数', id: 'advertiseTimes', unit: '次', value: 'advertise_times', show: option.type === '1' },
                { label: '宣传内容', id: 'advertiseContent', unit: '次', value: 'advertise_content', show: option.type === '1' },
                { label: '培训人数', id: 'trainees', unit: '人', value: 'trainees', show: option.type === '1', },
                { label: '培训次数', id: 'traningTimes', unit: '次', value: 'traning_times', show: option.type === '1', },
                { label: '培训内容', id: 'traningContent', unit: '', value: 'traning_content', show: option.type === '1' },
                { label: '配合相关部门、政府开展检查次数', id: 'govInspectionTimes', unit: '次', value: 'gov_inspection_times', show: option.type === '1', },
                { label: '发现存在问题个数', id: 'govInspectionProblems', unit: '个', value: 'gov_inspection_problems', show: option.type === '1', },
                { label: '主要涉及问题', id: 'govInspectionContent', value: 'gov_inspection_content', unit: '', show: option.type === '1' },
                
                // 周报
                { label: '专兼职收运人员', id: 'consignee', unit: '人', value: 'consignee', show: option.type === '2', },
                { label: '专兼职看守引导人员', id: 'guide', unit: '人', value: 'guide', show: option.type === '2', },
                { label: '专兼职监督检查人员', id: 'inspector', unit: '人', value: 'inspector', show: option.type === '2', },
                { label: '厨余垃圾收集容器', id: 'kitchenWasteCollectors', unit: '个', value: 'kitchen_waste_collectors', show: option.type === '2', },
                { label: '厨余垃圾收集存放处', id: 'kitchenWastePositons', unit: '处', value: 'kitchen_waste_positons', show: option.type === '2', },
                { label: '可回收垃圾收集容器', id: 'recyclableWasteCollectors', unit: '个', value: 'recyclable_waste_collectors', show: option.type === '2', },
                { label: '可回收垃圾收集存放处', id: 'recyclableWastePositons', unit: '处', value: 'recyclable_waste_positons', show: option.type === '2', },
                { label: '有害垃圾收集容器', id: 'harmfulWasteCollectors', unit: '个', value: 'harmful_waste_collectors', show: option.type === '2', },
                { label: '有害垃圾收集存放处', id: 'harmfulWastePositons', unit: '处', value: 'harmful_waste_positons', show: option.type === '2', },
                { label: '其他垃圾收集容器', id: 'otherWastePositons', unit: '个', value: 'other_waste_collectors', show: option.type === '2', },
                { label: '其他垃圾收集存放处', id: 'otherWastePositons', unit: '处', value: 'other_waste_positons', show: option.type === '2', },
                { label: '医疗垃圾收集容器', id: 'medicWasteCollectors', unit: '个', value: 'medic_waste_collectors', show: option.type === '2', },
                { label: '医疗垃圾收集存放处', id: 'medicWastePositons', unit: '处', value: 'medic_waste_positons', show: option.type === '2', },
                { label: '大件垃圾存放处', id: 'bulkyWastePositons', unit: '处', value: 'bulky_waste_positons', show: option.type === '2', },
                { label: '厨余垃圾', id: 'kitchenWaste', unit: '千克', value: 'kitchen_waste', show: option.type === '2', },
                { label: '可回收物', id: 'recyclableWaste', unit: '千克', value: 'recyclable_waste', show: option.type === '2', },
                { label: '有害垃圾', id: 'harmfulWaste', unit: '千克', value: 'harmful_waste' },
                { label: '医疗垃圾', id: 'medicWaste', unit: '千克', value: 'medic_waste', show: option.type === '2', },
                { label: '其他垃圾', id: 'otherWaste', unit: '千克', value: 'other_waste', show: option.type === '2', },
                
                // 月报
                { label: '厨余垃圾', id: 'kitchenWaste', unit: '千克', value: 'kitchen_waste', show: option.type === '3' },
                { label: '可回收物', id: 'recyclableWaste', unit: '千克', value: 'recyclable_waste', show: option.type === '3' },
                { label: '有害垃圾', id: 'harmfulWaste', unit: '千克', value: 'harmful_waste', show: option.type === '3' },
                { label: '大件垃圾', id: 'bulkyWaste', unit: '千克', value: 'bulky_waste', show: option.type === '3' },
                { label: '其他垃圾', id: 'otherWaste', unit: '千克', value: 'other_waste', show: option.type === '3' },
                
                // 医疗垃圾月报
                { label: '医疗垃圾月产量', id: 'totalWeight', unit: '千克', value: 'total_weight', show: option.type === '4' },
                // 桶前值守月报
                { label: '桶前值守人数', id: 'personCountOnDuty', unit: '人', value: 'person_count_on_duty', show: option.type === '5' }
              ].filter(item => item.show)
              console.log(info);
              this.setData({ info, detail: wx.getStorageSync('currentReport') })
        }
        
    },
    onUnload() {
        wx.removeStorageSync('currentReport')
    }
})
