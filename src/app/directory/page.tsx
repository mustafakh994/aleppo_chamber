import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { DirectoryFilters } from "@/components/directory/DirectoryFilters";
import { CompanyCard } from "@/components/directory/CompanyCard";

const companies = [
    {
        id: 1,
        name: "شركة النسيج العصرية",
        description: "رائدة في صناعة النسيج والأقمشة القطنية بجودة عالية وتصدير عالمي. لدينا خطوط إنتاج حديثة لتلبية اجتياجات السوق المحلية والعالمية.",
        sector: "صناعة النسيج",
        location: "المنطقة الصناعية - الشيخ نجار",
        phone: "+963 21 444 5555",
        isVerified: true,
        rating: 4.8
    },
    {
        id: 2,
        name: "مجموعة الشهباء التجارية",
        description: "استيراد وتصدير المواد الغذائية والتموينية، وكلاء حصريون للعديد من العلامات التجارية العالمية في الشرق الأوسط.",
        sector: "القطاع التجاري",
        location: "وسط البلد - شارع القوتلي",
        phone: "+963 21 222 3333",
        isVerified: true,
        rating: 4.5
    },
    {
        id: 3,
        name: "شركة البناء المتين",
        description: "مقاولات عامة وإنشاءات، متخصصون في الأبراج السكنية والمراكز التجارية. نلتزم بأعلى معايير السلامة والجودة.",
        sector: "الإنشاءات",
        location: "حلب الجديدة",
        phone: "+963 21 666 7777",
        isVerified: false,
        rating: 4.0
    },
    {
        id: 4,
        name: "حلب للوجستيات",
        description: "خدمات شحن ونقل بري وجوي، تخليص جمركي وحلول لوجستية متكاملة للشركات والمصانع.",
        sector: "الشحن واللوجستيات",
        location: "الراموسة",
        phone: "+963 21 888 9999",
        isVerified: true,
        rating: 4.9
    },
    {
        id: 5,
        name: "معمل الزيوت الذهبية",
        description: "إنتاج وتكرير زيوت الطعام النباتية بأحدث التقنيات. منتجاتنا خالية من الكوليسترول ومطابقة للمواصفات القياسية.",
        sector: "الصناعات الغذائية",
        location: "المدينة الصناعية - الشيخ نجار",
        phone: "+963 21 123 4567",
        isVerified: true,
        rating: 4.7
    },
    {
        id: 6,
        name: "مؤسسة التقنية الحديثة",
        description: "حلول برمجية وأنظمة أتمتة للمصانع والشركات. تصميم مواقع وتطبيقات موبايل.",
        sector: "تكنولوجيا المعلومات",
        location: "الجميلية",
        phone: "+963 21 987 6543",
        isVerified: false,
        rating: 4.2
    }
];

export default function DirectoryPage() {
    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="دليل الشركات"
                subtitle="الدليل الشامل للشركات التجارية والصناعية في حلب"
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Sidebar Filters */}
                    <DirectoryFilters />

                    {/* Main Content */}
                    <div className="flex-1 w-full space-y-6">

                        {/* Search & Toolbar */}
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                                <Input
                                    className="pr-10 w-full"
                                    placeholder="ابحث عن اسم الشركة، النشاط، أو العلامة التجارية..."
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <Button variant="outline" size="icon" className="hidden md:flex">
                                    <LayoutGrid className="w-5 h-5 text-slate-500" />
                                </Button>
                                <Button variant="ghost" size="icon" className="hidden md:flex">
                                    <List className="w-5 h-5 text-slate-400" />
                                </Button>
                                <Button className="md:hidden flex-1 flex gap-2">
                                    <SlidersHorizontal className="w-4 h-4" />
                                    تصفية النتائج
                                </Button>
                                <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary-gold cursor-pointer">
                                    <option>الأحدث انضماماً</option>
                                    <option>الأعلى تقييماً</option>
                                    <option>ترتيب أبجدي</option>
                                </select>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="flex justify-between items-center px-1">
                            <p className="text-slate-500 text-sm">تم العثور على <span className="font-bold text-primary-deep">124</span> شركة</p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {companies.map((company, index) => (
                                <CompanyCard key={index} {...company} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12">
                            <div className="flex gap-2">
                                <Button variant="outline" disabled>السابق</Button>
                                <Button variant="primary" className="w-10 h-10 p-0">1</Button>
                                <Button variant="outline" className="w-10 h-10 p-0">2</Button>
                                <Button variant="outline" className="w-10 h-10 p-0">3</Button>
                                <span className="flex items-center text-slate-400 px-2">...</span>
                                <Button variant="outline">التالي</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
