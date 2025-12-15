import React, { useState, useEffect } from 'react';
import { Save, Trash2, ChevronDown, ChevronUp, Globe } from 'lucide-react';

const translations = {
  ja: {
    title: 'ホステル チェックイン',
    subtitle: 'ゲスト情報管理システム',
    selectLanguage: '言語を選択',
    inputLanguage: '入力言語を選択',
    newEntry: '✏️ 新規入力',
    list: '📋 一覧',
    name: '名前',
    address: '住所',
    phone: '電話番号',
    nights: '宿泊日数',
    nationality: '国籍',
    passportNumber: 'パスポート番号または在留カード',
    passportImage: 'パスポートまたは在留カード画像',
    uploadPassport: 'パスポートまたは在留カードを携帯で撮影してアップロードしてください',
    save: '保存する',
    delete: '削除',
    saved: '✅ ゲスト情報を保存しました',
    deleted: '✅ 削除しました',
    required: '⚠️ 名前を入力してください',
    noData: '保存されたゲスト情報がありません',
    confirmDelete: 'この情報を削除してもいいですか？',
    details: '詳細情報',
    nights_count: '泊',
    japaneseNote: '※ 日本人はパスポート番号の入力は不要です',
    passportRequired: 'パスポート番号または在留カード番号を入力してください'
  },
  en: {
    title: 'Hostel Check-in',
    subtitle: 'Guest Information Management System',
    selectLanguage: 'Select Display Language',
    inputLanguage: 'Select Input Language',
    newEntry: '✏️ New Entry',
    list: '📋 List',
    name: 'Name',
    address: 'Address',
    phone: 'Phone Number',
    nights: 'Number of Nights',
    nationality: 'Nationality',
    passportNumber: 'Passport Number or Residence Card',
    passportImage: 'Passport or Residence Card Image',
    uploadPassport: 'Take a photo of your passport or residence card and upload it',
    save: 'Save',
    delete: 'Delete',
    saved: '✅ Guest information saved',
    deleted: '✅ Deleted',
    required: '⚠️ Please enter a name',
    noData: 'No guest information saved yet',
    confirmDelete: 'Are you sure you want to delete this information?',
    details: 'Details',
    nights_count: ' nights',
    japaneseNote: '※ Japanese nationals do not need to enter a passport number',
    passportRequired: 'Please enter passport number or residence card number'
  },
  zh: {
    title: '旅馆入住',
    subtitle: '客人信息管理系统',
    selectLanguage: '选择显示语言',
    inputLanguage: '选择输入语言',
    newEntry: '✏️ 新增条目',
    list: '📋 列表',
    name: '名字',
    address: '地址',
    phone: '电话号码',
    nights: '入住天数',
    nationality: '国籍',
    passportNumber: '护照号码或在留卡',
    passportImage: '护照或在留卡图片',
    uploadPassport: '请用手机拍摄护照或在留卡并上传',
    save: '保存',
    delete: '删除',
    saved: '✅ 客人信息已保存',
    deleted: '✅ 已删除',
    required: '⚠️ 请输入名字',
    noData: '尚未保存任何客人信息',
    confirmDelete: '确定要删除此信息吗？',
    details: '详细信息',
    nights_count: '晚',
    japaneseNote: '※ 日本国籍人士无需输入护照号码',
    passportRequired: '请输入护照号码或在留卡号码'
  },
  ko: {
    title: '호스텔 체크인',
    subtitle: '게스트 정보 관리 시스템',
    selectLanguage: '표시 언어 선택',
    inputLanguage: '입력 언어 선택',
    newEntry: '✏️ 새 항목',
    list: '📋 목록',
    name: '이름',
    address: '주소',
    phone: '전화번호',
    nights: '숙박일수',
    nationality: '국적',
    passportNumber: '여권번호 또는 재류카드',
    passportImage: '여권 또는 재류카드 사진',
    uploadPassport: '휴대폰으로 여권 또는 재류카드를 촬영하여 업로드하세요',
    save: '저장',
    delete: '삭제',
    saved: '✅ 게스트 정보가 저장되었습니다',
    deleted: '✅ 삭제되었습니다',
    required: '⚠️ 이름을 입력하세요',
    noData: '저장된 게스트 정보가 없습니다',
    confirmDelete: '정말 이 정보를 삭제하시겠습니까?',
    details: '세부 정보',
    nights_count: '박',
    japaneseNote: '※ 일본 국적자는 여권번호를 입력할 필요가 없습니다',
    passportRequired: '여권번호 또는 재류카드 번호를 입력하세요'
  },
  vi: {
    title: 'Nhà Khách Đăng Ký Nhập',
    subtitle: 'Hệ Thống Quản Lý Thông Tin Khách',
    selectLanguage: 'Chọn Ngôn Ngữ Hiển Thị',
    inputLanguage: 'Chọn Ngôn Ngữ Nhập Liệu',
    newEntry: '✏️ Mục Mới',
    list: '📋 Danh Sách',
    name: 'Tên',
    address: 'Địa Chỉ',
    phone: 'Số Điện Thoại',
    nights: 'Số Đêm Lưu Trú',
    nationality: 'Quốc Tịch',
    passportNumber: 'Số Hộ Chiếu hoặc Thẻ Cư Trú',
    passportImage: 'Hình Ảnh Hộ Chiếu hoặc Thẻ Cư Trú',
    uploadPassport: 'Chụp ảnh hộ chiếu hoặc thẻ cư trú bằng điện thoại và tải lên',
    save: 'Lưu',
    delete: 'Xóa',
    saved: '✅ Thông tin khách đã được lưu',
    deleted: '✅ Đã xóa',
    required: '⚠️ Vui lòng nhập tên',
    noData: 'Chưa có thông tin khách được lưu',
    confirmDelete: 'Bạn có chắc chắn muốn xóa thông tin này không?',
    details: 'Chi Tiết',
    nights_count: ' đêm',
    japaneseNote: '※ Người Nhật không cần nhập số hộ chiếu',
    passportRequired: 'Vui lòng nhập số hộ chiếu hoặc số thẻ cư trú'
  }
};

const inputLanguages = {
  ja: '日本語',
  en: 'English'
};

export default function App() {
  const [displayLanguage, setDisplayLanguage] = useState('ja');
  const [inputLanguage, setInputLanguage] = useState('ja');
  const [tab, setTab] = useState('input');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    nights: '',
    nationality: '',
    passportNumber: '',
    passportImage: null
  });
  const [guests, setGuests] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [saveStatus, setSaveStatus] = useState('');

  const t = translations[displayLanguage];
  const hasPassport = formData.passportNumber.trim().length > 0;

  useEffect(() => {
    const saved = localStorage.getItem('hostel_guests_multilang_v2');
    if (saved) {
      setGuests(JSON.parse(saved));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          passportImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!formData.name.trim()) {
      setSaveStatus(t.required);
      setTimeout(() => setSaveStatus(''), 3000);
      return;
    }

    if (hasPassport && !formData.passportImage) {
      setSaveStatus(displayLanguage === 'ja' 
        ? '⚠️ パスポート画像をアップロードしてください' 
        : '⚠️ Please upload a passport image');
      setTimeout(() => setSaveStatus(''), 3000);
      return;
    }

    const newGuest = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString('ja-JP'),
      inputLanguage: inputLanguage
    };

    const updatedGuests = [newGuest, ...guests];
    setGuests(updatedGuests);
    localStorage.setItem('hostel_guests_multilang_v2', JSON.stringify(updatedGuests));

    setFormData({
      name: '',
      address: '',
      phone: '',
      nights: '',
      nationality: '',
      passportNumber: '',
      passportImage: null
    });

    setSaveStatus(t.saved);
    setTimeout(() => setSaveStatus(''), 3000);
    setTab('list');
  };

  const handleDelete = (id) => {
    if (window.confirm(t.confirmDelete)) {
      const updatedGuests = guests.filter(guest => guest.id !== id);
      setGuests(updatedGuests);
      localStorage.setItem('hostel_guests_multilang_v2', JSON.stringify(updatedGuests));
      setSaveStatus(t.deleted);
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={20} className="text-indigo-600" />
              <span className="font-semibold text-gray-700">{t.selectLanguage}:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(translations).map(lang => (
                <button
                  key={lang}
                  onClick={() => setDisplayLanguage(lang)}
                  className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                    displayLanguage === lang
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {lang === 'ja' && '日本語'}
                  {lang === 'en' && 'English'}
                  {lang === 'zh' && '中文'}
                  {lang === 'ko' && '한국어'}
                  {lang === 'vi' && 'Tiếng Việt'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={20} className="text-blue-600" />
              <span className="font-semibold text-gray-700">{t.inputLanguage}:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(inputLanguages).map(lang => (
                <button
                  key={lang}
                  onClick={() => setInputLanguage(lang)}
                  className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                    inputLanguage === lang
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {inputLanguages[lang]}
                </button>
              ))}
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-600 mb-8">{t.subtitle}</p>

          <div className="flex gap-4 mb-8 border-b border-gray-300 overflow-x-auto">
            <button
              onClick={() => setTab('input')}
              className={`pb-3 px-4 font-semibold transition whitespace-nowrap ${
                tab === 'input'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {t.newEntry}
            </button>
            <button
              onClick={() => setTab('list')}
              className={`pb-3 px-4 font-semibold transition whitespace-nowrap ${
                tab === 'list'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {t.list} ({guests.length})
            </button>
          </div>

          {saveStatus && (
            <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg text-center text-sm font-medium text-blue-800">
              {saveStatus}
            </div>
          )}

          {tab === 'input' && (
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">{t.japaneseNote}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.name} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.nationality}
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  placeholder={t.nationality}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.address}
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder={t.address}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.phone}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.nights}
                </label>
                <input
                  type="number"
                  name="nights"
                  value={formData.nights}
                  onChange={handleInputChange}
                  placeholder="1"
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.passportNumber}
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  placeholder={t.passportNumber}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {hasPassport && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.passportImage} *
                  </label>
                  <p className="text-xs text-gray-600 mb-2">{t.uploadPassport}</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {formData.passportImage && (
                    <p className="text-xs text-green-600 mt-2">
                      {displayLanguage === 'ja' ? '✅ 画像が選択されました' : '✅ Image selected'}
                    </p>
                  )}
                </div>
              )}

              <button
                onClick={handleSave}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 text-lg"
              >
                <Save size={24} />
                {t.save}
              </button>
            </div>
          )}

          {tab === 'list' && (
            <div className="space-y-4">
              {guests.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">{t.noData}</p>
                </div>
              ) : (
                guests.map((guest, index) => (
                  <div
                    key={guest.id}
                    className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="w-full bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 p-4 flex justify-between items-center transition"
                    >
                      <div className="text-left">
                        <p className="font-bold text-gray-800 text-lg">{guest.name}</p>
                        <p className="text-sm text-gray-600">
                          {guest.nationality} • {guest.nights}{t.nights_count}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{guest.date}</p>
                      </div>
                      {expandedIndex === index ? (
                        <ChevronUp size={24} className="text-indigo-600" />
                      ) : (
                        <ChevronDown size={24} className="text-indigo-600" />
                      )}
                    </button>

                    {expandedIndex === index && (
                      <div className="bg-white p-4 border-t border-gray-300 space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-gray-600">{t.address}</p>
                          <p className="text-gray-800">{guest.address || '-'}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600">{t.phone}</p>
                          <p className="text-gray-800">{guest.phone || '-'}</p>
                        </div>
                        {guest.passportNumber && (
                          <div>
                            <p className="text-xs font-semibold text-gray-600">{t.passportNumber}</p>
                            <p className="text-gray-800">{guest.passportNumber}</p>
                          </div>
                        )}
                        {guest.passportImage && (
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-2">{t.passportImage}</p>
                            <img src={guest.passportImage} alt="Passport" className="w-full h-48 object-cover rounded" />
                          </div>
                        )}
                        <button
                          onClick={() => handleDelete(guest.id)}
                          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition flex items-center justify-center gap-2"
                        >
                          <Trash2 size={18} />
                          {t.delete}
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-800">
              🔒 {translations[displayLanguage].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
