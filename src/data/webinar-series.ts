import type { SpeakerId } from "./speakers";

export type WebinarEntry = {
  number: string;
  title: string;
  date: string;
  day: string;
  /** Tam tarih+saat (ISO, UTC). Hero countdown'u ve sıralama için. */
  targetDate: string;
  status: "completed" | "upcoming";
  speakerIds: SpeakerId[];
  /** Konuşmacı başına title override — verilmezse speakers.ts'deki varsayılan kullanılır. */
  speakerTitleOverrides?: Partial<Record<SpeakerId, string>>;
  /** Çok kişili (>2) webinarlarda kart üstünde tek satırlık özet başlık. */
  groupLabel?: string;
  topics: string[];
};

export const webinarSeries: WebinarEntry[] = [
  {
    number: "01",
    title: "ABD'de Doktorluk: Gerçekler, Mitler ve Yol Haritası",
    date: "9 Mayıs 2026",
    day: "Cumartesi",
    targetDate: "2026-05-09T17:00:00Z",
    status: "completed",
    speakerIds: ["furkan"],
    speakerTitleOverrides: { furkan: "USCAMP Kurucu" },
    topics: [
      "ABD'de doktorluk süreci hakkında yaygın mitler ve gerçekler",
      "USMLE, ECFMG ve MATCH sürecinin genel yol haritası",
      "Türk hekimler için en uygun stratejiler",
    ],
  },
  {
    number: "02",
    title: "Klinik Deneyim (USCE) ve Güçlü CV Oluşturma",
    date: "16 Mayıs 2026",
    day: "Cumartesi",
    targetDate: "2026-05-16T17:00:00Z",
    status: "upcoming",
    speakerIds: ["furkan", "sena"],
    speakerTitleOverrides: { furkan: "USCAMP Kurucu & USCAMP Mentor" },
    topics: [
      "Observership ve hands-on staj farkları",
      "ABD'de staj başvuru süreci ve zamanlama",
      "MATCH için güçlü bir CV nasıl oluşturulur",
    ],
  },
  {
    number: "03",
    title: "USMLE Çalışma Stratejileri",
    date: "23 Mayıs 2026",
    day: "Cumartesi",
    targetDate: "2026-05-23T17:00:00Z",
    status: "upcoming",
    speakerIds: ["melih"],
    topics: [
      "Step 1 ve Step 2 CK için verimli çalışma planı",
      "Kaynak seçimi ve soru bankası stratejileri",
      "Sık yapılan hatalar ve çözüm önerileri",
    ],
  },
  {
    number: "04",
    title: "Başarı Hikayeleri & Soru-Cevap",
    date: "2 Haziran 2026",
    day: "Salı",
    targetDate: "2026-06-02T17:00:00Z",
    status: "upcoming",
    speakerIds: ["alperen", "miray", "kutay", "ebubekir"],
    groupLabel: "USCAMP Mentorları",
    topics: [
      "ABD'de MATCH'e kabul olan doktorların hikayeleri",
      "Süreçte karşılaşılan zorluklar ve çözümleri",
      "Katılımcılardan gelen sorulara canlı yanıtlar",
    ],
  },
];

const upcomingIndex = webinarSeries.findIndex((w) => w.status === "upcoming");

/** Tüm webinarlar tamamlanmışsa fallback olarak son webinar gösterilir. */
export const nextUpcomingIndex = upcomingIndex >= 0 ? upcomingIndex : webinarSeries.length - 1;
export const nextUpcomingWebinar = webinarSeries[nextUpcomingIndex];
