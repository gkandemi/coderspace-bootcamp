import moment from "moment";

moment.updateLocale("en", {
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        m: '1 dakika',
        mm: '%d dakika',
        h: '1 saat',
        hh: '%d saat',
        d: '1 gün',
        dd: '%d gün',
        M: '1 ay',
        MM: '%d ay',
        y: '1 yıl',
        yy: '%d yıl'
    },
})
export default {
    methods: {
        copy(myObject) {
            return JSON.parse(JSON.stringify(myObject))
        },
        timesAgo(time) {
            return moment(time).fromNow();
        },
        _createdAtInfo(fullName, createdAt, postFix) {
            // Gökhan Kandemir 15:00'de sordu
            return `${fullName} ${this.timesAgo(createdAt)} ${postFix || 'sordu'}`
        }
    }
}
