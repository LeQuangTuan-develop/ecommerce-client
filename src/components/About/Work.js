import React from "react"

const Work = () => {
  return (
    <div className="about__section about__section--gray about__work">
      <div className="about__content">
        <h5 className="about__content--subtitle">
          Chúng tôi hoạt động thế nào
        </h5>
        <h2 className="about__content--title">
          Sự hài lòng và trải nghiệm được <span>Healthy Food</span> đặt lên hàng
          đầu
        </h2>
        <p className="about__content--desc">
          <span>Healthy Food</span> không ngừng thay đổi, phát triển để phù hợp
          với thị trường với triết lý "Khách hàng là trung tâm" và những Giá trị
          cốt lõi được xây dựng để chăm sóc phục vụ khách hàng một cách tốt
          nhất.
        </p>
        <div className="about__content--text about__work--container">
          <div className="about__work--box">
            <div>
              <img src="/img/about/icon-1.webp" alt="" />
              <h5>01</h5>
            </div>
            <h3>Chuyên môn</h3>
            <p>
              Chúng tôi chú trọng xây dựng đội ngũ với chuyên môn cao nhất, am
              hiểu tường tận thị trường, thị hiếu của khách hàng. Đây cũng là
              điểm khác biệt lớn nhất của <span>Healthy Food</span> với đại đa
              số các doanh nghiệp khác
            </p>
          </div>
          <div className="about__work--box">
            <div>
              <img src="/img/about/icon-1.webp" alt="" />
              <h5>02</h5>
            </div>
            <h3>Nhiệt huyết</h3>
            <p>
              Song song với việc cung cấp sản phẩm, giá trị, trải nghiệm dành
              cho khách hàng <span>Healthy Food</span> chú trọng đào tạo, tuyển dụng đội ngũ
              trẻ, đam mê và đầy nhiệt huyết
            </p>
          </div>
          <div className="about__work--box">
            <div>
              <img src="/img/about/icon-1.webp" alt="" />
              <h5>03</h5>
            </div>
            <h3>Công nghệ</h3>
            <p>
              Chúng tôi cam kết luôn luôn thay đổi bản thân, áp dụng công nghệ
              tiên tiến để thay đổi hành cách thức mua hàng, phát triển nhiều
              nền tảng tiên tiến nhằm phục vụ Quý khách hàng nhiều hơn trong
              tương lai.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work