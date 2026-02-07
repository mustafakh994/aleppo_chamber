export interface Tender {
    id: string;
    title: string;
    organization: string;
    description: string;
    type: "tender" | "auction";
    sector: "construction" | "supply" | "services" | "it";
    publishDate: string;
    deadline: string;
    status: "open" | "closed" | "extended";
    referenceNumber: string;
}

export const tenders: Tender[] = [
    {
        id: "1",
        title: "تتوريد تجهيزات مكتبية وحواسب لمقر الغرفة",
        organization: "غرفة تجارة حلب",
        description: "تعلن غرفة تجارة حلب عن رغبتها بطلب عروض أسعار لتوريد تجهيزات مكتبية وحواسب وطابعات حديثة.",
        type: "tender",
        sector: "supply",
        publishDate: "2024-02-01",
        deadline: "2024-02-15",
        status: "open",
        referenceNumber: "T-2024-001"
    },
    {
        id: "2",
        title: "إعادة تأهيل واجهة المبنى التراثي في السوق القديم",
        organization: "مديرية الآثار والمتاحف - فرع حلب",
        description: "مشروع ترميم وإعادة تأهيل للواجهة الحجرية والخشبية وفق المعايير الفنية المعتمدة للأسواق الأثرية.",
        type: "tender",
        sector: "construction",
        publishDate: "2024-01-25",
        deadline: "2024-02-20",
        status: "open",
        referenceNumber: "C-2024-055"
    },
    {
        id: "3",
        title: "مزاد علني لبيع سيارات سياحية وحقلية مستعملة",
        organization: "المؤسسة العامة للتجارة الخارجية",
        description: "جلسة مزاد علني لبيع عدد 50 سيارة سياحية وحقلية مختلفة الأنواع والموديلات.",
        type: "auction",
        sector: "supply",
        publishDate: "2024-02-05",
        deadline: "2024-02-18",
        status: "open",
        referenceNumber: "A-2024-012"
    },
    {
        id: "4",
        title: "تقديم خدمات نظافة وصيانة لمبنى الخدمات الفنية",
        organization: "مجلس مدينة حلب",
        description: "عقد سنوي لتقديم خدمات النظافة والأمن والصيانة الدورية لمبنى الخدمات الفنية في منطقة السبع بحرات.",
        type: "tender",
        sector: "services",
        publishDate: "2024-01-20",
        deadline: "2024-02-10",
        status: "extended",
        referenceNumber: "S-2024-089"
    },
    {
        id: "5",
        title: "توريد وتركيب منظومة طاقة شمسية 100 كيلو واط",
        organization: "شركة كهرباء حلب",
        description: "مشروع لتوريد وتركيب وتشغيل منظومة طاقة شمسية كهروضوئية باستطاعة 100 كيلو واط لمحطة التحويل.",
        type: "tender",
        sector: "construction",
        publishDate: "2024-02-03",
        deadline: "2024-03-01",
        status: "open",
        referenceNumber: "E-2024-033"
    },
    {
        id: "6",
        title: "تطوير وتحديث البوابة الإلكترونية وتطبيق الجوال",
        organization: "غرفة صناعة حلب",
        description: "استدراج عروض لتطوير الموقع الإلكتروني وتطبيق الهواتف الذكية مع نظام دفع إلكتروني.",
        type: "tender",
        sector: "it",
        publishDate: "2024-02-06",
        deadline: "2024-02-28",
        status: "open",
        referenceNumber: "IT-2024-004"
    }
];
