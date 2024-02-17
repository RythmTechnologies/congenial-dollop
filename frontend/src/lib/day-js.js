import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale("tr");

class DateUtils {
  // Tarihi formatla veya ne kadar zaman önce olduğunu döndür
  static formatDate(date, { fromNow = false, format = "DD-MM-YYY" }) {
    if (fromNow) {
      return dayjs(date).fromNow();
    }
    return dayjs(date).format(format);
  }

  // İki tarih arasındaki gün sayısını hesapla
  static calculateDaysBetween(date1, date2) {
    return dayjs(date2).diff(dayjs(date1), "day");
  }

  // Bir tarihin diğerinden önce olup olmadığını kontrol et
  static isBefore(date1, date2) {
    return dayjs(date1).isBefore(dayjs(date2));
  }

  // Bir tarihin diğerinden sonra olup olmadığını kontrol et
  static isAfter(date1, date2) {
    return dayjs(date1).isAfter(dayjs(date2));
  }
}

export default DateUtils;
