import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Ma'lumotlar yuborildi!");
  };

  const slides = [
    {
      img: "https://st.depositphotos.com/39091214/54435/i/450/depositphotos_544357936-stock-photo-ielts-word-wooden-blocks-letters.jpg",
      title: "IELTS TAYYORLOV",
      text: "Cambridge'da ham ingliz tilini o'rgansiz, IELTS'ni ham shu yerda olasiz"
    },
    {
      img: "https://img.freepik.com/free-photo/english-book-with-cup-coffee-table_1150-7338.jpg",
      title: "BOSHLANG'ICH DARSLAR",
      text: "Noldan boshlab ingliz tilini mukammal o'rganing"
    },
    {
      img: "https://img.freepik.com/free-photo/group-international-students-having-meeting_23-2149196161.jpg",
      title: "MULOQOT DARSLARI",
      text: "Erkin muloqot qilish qobiliyatingizni oshiring"
    }
  ];

  return (
    <div className="container">
      <div className="card-main">
        <div className="left-side">
          <h1>Ingliz tilini o'rganishni xohlaysizmi?</h1>
          
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <div className="card-img">
                    <img src={slide.img} alt={slide.title} />
                  </div>
                  <div className="card-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="form-side">
          <form onSubmit={handleSubmit}>
            <h2>Darslarga yozilish uchun hoziroq ro'yxatdan o'ting</h2>

            <input
              type="text"
              name="name"
              placeholder="Ism"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqam"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Yoshingiz"
              value={formData.age}
              onChange={handleChange}
            />
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Shaharni tanlang</option>
              <option value="Toshkent">Toshkent</option>
              <option value="Farg'ona">Farg'ona</option>
              <option value="Samarqand">Samarqand</option>
            </select>

            <button type="submit">Menga qo'ng'iroq qiling!</button>
            <p className="form-bottom">Darslar Toshkent, Farg'ona va Samarqand shaharlarida offlayn olib boriladi.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;