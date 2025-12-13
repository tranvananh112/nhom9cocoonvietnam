// Dữ liệu bài viết và ý tưởng cho website Cocoon

export interface Article {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    author: string
    category: string
    readTime: string
    content?: string
    tags?: string[]
}

// Bài viết hiện có
export const publishedArticles: Article[] = [
    {
        id: 1,
        title: "Cocoon x AAF: Ký kết hợp tác 'Chung tay cứu trợ chó mèo lang thang' lần II",
        excerpt: "Cocoon Việt Nam tiếp tục đồng hành cùng Quỹ Bảo vệ Động vật AAF trong chương trình cứu trợ động vật lang thang, thể hiện cam kết bảo vệ môi trường và động vật.",
        image: "/baiviet1.jpg",
        date: "13.12.2024",
        author: "Cocoon",
        category: "Hoạt động xã hội",
        readTime: "3 phút đọc",
        tags: ["Bảo vệ động vật", "Trách nhiệm xã hội", "AAF", "Cocoon"],
        content: `
        <div class="article-content">
            <p>Cocoon Việt Nam tự hào thông báo về việc ký kết hợp tác lần thứ hai với Quỹ Bảo vệ Động vật AAF (Animal Aid & Rescue Foundation) trong chương trình "Chung tay cứu trợ chó mèo lang thang".</p>
            
            <h2>Cam kết bền vững với động vật</h2>
            <p>Là thương hiệu mỹ phẩm thuần chay 100%, Cocoon luôn đặt việc bảo vệ động vật và môi trường lên hàng đầu. Chúng tôi tin rằng vẻ đẹp thực sự không nên đến từ việc gây tổn hại đến bất kỳ sinh vật nào.</p>
            
            <h2>Hoạt động cụ thể</h2>
            <ul>
                <li>Hỗ trợ tài chính cho việc cứu chữa động vật bị thương</li>
                <li>Cung cấp thức ăn và thuốc men cho động vật lang thang</li>
                <li>Tổ chức các chiến dịch nhận nuôi có trách nhiệm</li>
                <li>Giáo dục cộng đồng về quyền lợi động vật</li>
            </ul>
            
            <h2>Thông điệp từ Cocoon</h2>
            <p>"Chúng tôi tin rằng một thế giới tốt đẹp hơn bắt đầu từ những hành động nhỏ. Việc bảo vệ những sinh vật không thể tự bảo vệ mình chính là trách nhiệm của chúng ta", đại diện Cocoon chia sẻ.</p>
            
            <p>Hãy cùng Cocoon và AAF tạo nên một thế giới tốt đẹp hơn cho tất cả các sinh vật!</p>
        </div>
        `
    },
    {
        id: 2,
        title: "Bí quyết chăm sóc da mùa đông với sản phẩm thuần chay",
        excerpt: "Khám phá những tips chăm sóc da hiệu quả trong mùa đông khô hanh với các sản phẩm thuần chay từ thiên nhiên Việt Nam.",
        image: "/baiviet2.jpg",
        date: "10.12.2024",
        author: "Cocoon",
        category: "Làm đẹp",
        readTime: "5 phút đọc",
        tags: ["Chăm sóc da", "Mùa đông", "Thuần chay", "Skincare"],
        content: `
        <div class="article-content">
            <p>Mùa đông đến, làn da của bạn có đang gặp khó khăn với thời tiết khô hanh? Hãy cùng Cocoon khám phá những bí quyết chăm sóc da hiệu quả với sản phẩm thuần chay!</p>
            
            <h2>Tại sao da khô vào mùa đông?</h2>
            <p>Độ ẩm trong không khí giảm, gió lạnh và sưởi ấm trong nhà đều làm da mất nước nhanh chóng. Da trở nên khô ráp, bong tróc và dễ kích ứng.</p>
            
            <h2>5 bước chăm sóc da mùa đông</h2>
            <h3>1. Làm sạch nhẹ nhàng</h3>
            <p>Sử dụng sữa rửa mặt có độ pH cân bằng, không chứa sulfate. Tránh rửa mặt quá nhiều lần trong ngày.</p>
            
            <h3>2. Toner cấp ẩm</h3>
            <p>Chọn toner không chứa cồn, giàu hyaluronic acid và các chiết xuất thực vật như lô hội, hoa hồng.</p>
            
            <h3>3. Serum dưỡng ẩm</h3>
            <p>Serum chứa vitamin E, dầu jojoba và các peptide thực vật giúp phục hồi hàng rào bảo vệ da.</p>
            
            <h3>4. Kem dưỡng ẩm đậm đặc</h3>
            <p>Chọn kem có kết cấu dày, chứa ceramide và các acid béo thiết yếu.</p>
            
            <h3>5. Chống nắng không thể thiếu</h3>
            <p>Tia UV vẫn có hại ngay cả trong mùa đông. Sử dụng kem chống nắng SPF 30+ hàng ngày.</p>
            
            <h2>Thành phần thiên nhiên nên tìm</h2>
            <ul>
                <li><strong>Dầu dừa:</strong> Cấp ẩm sâu, kháng khuẩn tự nhiên</li>
                <li><strong>Lô hội:</strong> Làm dịu, chống viêm</li>
                <li><strong>Mật ong:</strong> Giữ ẩm, chống oxy hóa</li>
                <li><strong>Bơ hạt mỡ:</strong> Nuôi dưỡng, phục hồi da</li>
            </ul>
            
            <p>Hãy lựa chọn những sản phẩm thuần chay, không thử nghiệm trên động vật để vừa chăm sóc da, vừa bảo vệ môi trường nhé!</p>
        </div>
        `
    },
    {
        id: 3,
        title: "Hành trình phát triển mỹ phẩm thuần chay tại Việt Nam",
        excerpt: "Câu chuyện về sự phát triển của ngành mỹ phẩm thuần chay Việt Nam và những thách thức, cơ hội trong tương lai.",
        image: "/baiviet3.jpg",
        date: "08.12.2024",
        author: "Cocoon",
        category: "Câu chuyện thương hiệu",
        readTime: "7 phút đọc",
        tags: ["Thương hiệu", "Việt Nam", "Phát triển", "Mỹ phẩm thuần chay"],
        content: `
        <div class="article-content">
            <p>Từ một thị trường còn xa lạ với khái niệm "vegan beauty", Việt Nam đang dần trở thành một trong những quốc gia tiên phong trong khu vực về mỹ phẩm thuần chay. Hãy cùng nhìn lại hành trình đầy thú vị này!</p>
            
            <h2>Khởi đầu từ những thách thức</h2>
            <p>Cách đây 10 năm, khái niệm mỹ phẩm thuần chay còn rất mới mẻ với người tiêu dùng Việt Nam. Những thách thức ban đầu bao gồm:</p>
            <ul>
                <li>Thiếu hiểu biết về lợi ích của mỹ phẩm thuần chay</li>
                <li>Nguồn nguyên liệu chất lượng cao còn hạn chế</li>
                <li>Chi phí sản xuất cao hơn so với mỹ phẩm truyền thống</li>
                <li>Quy trình chứng nhận vegan phức tạp</li>
            </ul>
            
            <h2>Bước ngoặt quan trọng</h2>
            <p>Năm 2018-2020 đánh dấu bước ngoặt quan trọng khi:</p>
            <ul>
                <li>Ý thức bảo vệ môi trường của người tiêu dùng tăng cao</li>
                <li>Các thương hiệu nội địa bắt đầu đầu tư nghiên cứu</li>
                <li>Sự xuất hiện của các influencer ủng hộ lifestyle xanh</li>
                <li>Chính phủ khuyến khích phát triển sản phẩm thân thiện môi trường</li>
            </ul>
            
            <h2>Thế mạnh của Việt Nam</h2>
            <h3>Nguồn nguyên liệu phong phú</h3>
            <p>Việt Nam sở hữu kho tàng thực vật đa dạng với hơn 3,800 loài có giá trị dược liệu và mỹ phẩm:</p>
            <ul>
                <li>Nghệ Hưng Yên - chống viêm, làm sáng da</li>
                <li>Sen Tây Hồ - cấp ẩm, chống lão hóa</li>
                <li>Dừa Bến Tre - dưỡng ẩm, kháng khuẩn</li>
                <li>Trà xanh Thái Nguyên - chống oxy hóa</li>
            </ul>
            
            <h3>Truyền thống làm đẹp từ thiên nhiên</h3>
            <p>Phụ nữ Việt Nam từ lâu đã quen thuộc với việc sử dụng các nguyên liệu tự nhiên như nghệ, mật ong, nước vo gạo để làm đẹp.</p>
            
            <h2>Những thành tựu đáng tự hào</h2>
            <ul>
                <li>Hơn 50 thương hiệu mỹ phẩm thuần chay Việt Nam ra đời</li>
                <li>Xuất khẩu mỹ phẩm thuần chay tăng 200% trong 3 năm qua</li>
                <li>Được quốc tế công nhận về chất lượng và đạo đức</li>
                <li>Tạo việc làm cho hàng nghìn lao động nông thôn</li>
            </ul>
            
            <h2>Tương lai phát triển</h2>
            <p>Với sự hỗ trợ của chính phủ và ý thức ngày càng cao của người tiêu dùng, ngành mỹ phẩm thuần chay Việt Nam hướng tới:</p>
            <ul>
                <li>Trở thành trung tâm sản xuất mỹ phẩm thuần chay Đông Nam Á</li>
                <li>Phát triển công nghệ sinh học xanh</li>
                <li>Mở rộng thị trường xuất khẩu toàn cầu</li>
                <li>Xây dựng chuỗi cung ứng bền vững</li>
            </ul>
            
            <p>Hành trình này mới chỉ bắt đầu, và chúng ta có thể tự hào về những gì đã đạt được. Cùng nhau, chúng ta sẽ tiếp tục viết nên câu chuyện thành công của mỹ phẩm thuần chay Việt Nam!</p>
        </div>
        `
    },
    {
        id: 4,
        title: "5 thành phần thiên nhiên Việt Nam 'vàng' cho làn da khỏe mạnh",
        excerpt: "Khám phá sức mạnh của nghệ, mật ong rừng, dầu dừa, lô hội và trà xanh trong việc chăm sóc da tự nhiên.",
        image: "/natural-ingredients.jpg",
        date: "15.12.2024",
        author: "Cocoon",
        category: "Thành phần tự nhiên",
        readTime: "6 phút đọc",
        tags: ["Thành phần tự nhiên", "Nghệ", "Mật ong", "Dầu dừa", "Việt Nam"],
        content: `
        <div class="article-content">
            <p>Đất nước Việt Nam được thiên nhiên ưu ái với kho tàng thực vật phong phú. Hãy cùng khám phá 5 thành phần thiên nhiên "vàng" mà tổ tiên ta đã sử dụng từ hàng nghìn năm để chăm sóc làn da!</p>
            
            <h2>1. Nghệ Hưng Yên - "Vàng đỏ" của làn da</h2>
            <p>Nghệ Hưng Yên nổi tiếng với hàm lượng curcumin cao nhất Việt Nam, được UNESCO công nhận là di sản văn hóa phi vật thể.</p>
            
            <h3>Công dụng:</h3>
            <ul>
                <li>Chống viêm, kháng khuẩn mạnh mẽ</li>
                <li>Làm sáng da, mờ thâm nám</li>
                <li>Chống oxy hóa, chậm lão hóa</li>
                <li>Điều trị mụn hiệu quả</li>
            </ul>
            
            <h3>Cách sử dụng:</h3>
            <p>Pha bột nghệ với mật ong tạo thành mặt nạ, đắp 15-20 phút. Hoặc tìm các sản phẩm chứa chiết xuất nghệ đã được tinh chế.</p>
            
            <h2>2. Mật ong rừng U Minh - Kho báu từ thiên nhiên</h2>
            <p>Mật ong rừng U Minh có màu nâu đậm đặc trưng, chứa hàng trăm enzyme và khoáng chất quý giá.</p>
            
            <h3>Công dụng:</h3>
            <ul>
                <li>Cấp ẩm sâu, giữ ẩm lâu dài</li>
                <li>Kháng khuẩn tự nhiên</li>
                <li>Làm lành vết thương, mờ sẹo</li>
                <li>Nuôi dưỡng da mềm mại</li>
            </ul>
            
            <h3>Lưu ý:</h3>
            <p>Chọn mật ong thật 100%, tránh sản phẩm pha trộn. Test thử trên da tay trước khi sử dụng.</p>
            
            <h2>3. Dầu dừa Bến Tre - "Liquid gold" của miền Tây</h2>
            <p>Dầu dừa nguyên chất Bến Tre chứa 50% acid lauric, có tính kháng khuẩn và dưỡng ẩm tuyệt vời.</p>
            
            <h3>Công dụng:</h3>
            <ul>
                <li>Dưỡng ẩm cho da khô</li>
                <li>Tẩy trang nhẹ nhàng</li>
                <li>Chống nắng tự nhiên (SPF 4-10)</li>
                <li>Làm dịu da bị kích ứng</li>
            </ul>
            
            <h3>Cách chọn:</h3>
            <p>Ưu tiên dầu dừa ép lạnh, không tinh chế, có màu trong suốt và mùi thơm tự nhiên.</p>
            
            <h2>4. Lô hội Phan Thiết - Bác sĩ xanh của làn da</h2>
            <p>Lô hội Phan Thiết được trồng trên đất cát ven biển, có hàm lượng gel và dưỡng chất cao.</p>
            
            <h3>Công dụng:</h3>
            <ul>
                <li>Làm dịu da bị cháy nắng</li>
                <li>Chống viêm, giảm đỏ</li>
                <li>Cấp ẩm không gây nhờn</li>
                <li>Thúc đẩy tái tạo tế bào da</li>
            </ul>
            
            <h3>Tip sử dụng:</h3>
            <p>Cắt lá lô hội, lấy gel trong suốt bên trong. Bảo quản trong tủ lạnh để tăng hiệu quả làm dịu.</p>
            
            <h2>5. Trà xanh Thái Nguyên - Elixir chống lão hóa</h2>
            <p>Trà xanh Thái Nguyên chứa hàm lượng catechin và EGCG cao, là chất chống oxy hóa mạnh mẽ.</p>
            
            <h3>Công dụng:</h3>
            <ul>
                <li>Chống oxy hóa, ngăn ngừa lão hóa</li>
                <li>Se khít lỗ chân lông</li>
                <li>Giảm bóng nhờn</li>
                <li>Bảo vệ da khỏi tác hại môi trường</li>
            </ul>
            
            <h3>Cách dùng:</h3>
            <p>Pha trà xanh đậm đặc, để nguội rồi dùng làm toner. Hoặc đắp túi trà đã qua sử dụng lên mắt để giảm bọng mắt.</p>
            
            <h2>Lời khuyên từ chuyên gia</h2>
            <p>Khi sử dụng nguyên liệu tự nhiên, hãy nhớ:</p>
            <ul>
                <li>Luôn test thử trên da tay trước</li>
                <li>Sử dụng đều đặn để thấy hiệu quả</li>
                <li>Kết hợp với chế độ ăn uống lành mạnh</li>
                <li>Tham khảo ý kiến chuyên gia nếu có vấn đề da liễu</li>
            </ul>
            
            <p>Hãy tự hào về những món quà thiên nhiên Việt Nam đã ban tặng và sử dụng chúng một cách khôn ngoan để có làn da khỏe mạnh, rạng rỡ!</p>
        </div>
        `
    },
    {
        id: 5,
        title: "Cocoon và hành trình Zero Waste: Từ bao bì đến sản xuất",
        excerpt: "Tìm hiểu cách Cocoon áp dụng triết lý Zero Waste trong toàn bộ quy trình từ nghiên cứu, sản xuất đến đóng gói sản phẩm.",
        image: "/vegan-beauty.jpg",
        date: "18.12.2024",
        author: "Cocoon",
        category: "Môi trường",
        readTime: "8 phút đọc",
        tags: ["Zero Waste", "Bền vững", "Môi trường", "Bao bì xanh"],
        content: `
        <div class="article-content">
            <p>Trong bối cảnh biến đổi khí hậu ngày càng nghiêm trọng, Cocoon đã đặt mục tiêu trở thành thương hiệu mỹ phẩm Zero Waste đầu tiên tại Việt Nam. Hãy cùng khám phá hành trình đầy thử thách nhưng ý nghĩa này!</p>
            
            <h2>Zero Waste là gì?</h2>
            <p>Zero Waste không chỉ đơn giản là "không rác thải". Đây là triết lý sống và sản xuất nhằm:</p>
            <ul>
                <li>Giảm thiểu tối đa chất thải từ nguồn</li>
                <li>Tái sử dụng và tái chế mọi thứ có thể</li>
                <li>Thiết kế sản phẩm theo nguyên tắc kinh tế tuần hoàn</li>
                <li>Bảo vệ tài nguyên thiên nhiên cho thế hệ tương lai</li>
            </ul>
            
            <h2>Hành trình Zero Waste của Cocoon</h2>
            
            <h3>Giai đoạn 1: Nghiên cứu và phát triển (2019-2020)</h3>
            <p>Chúng tôi bắt đầu bằng việc nghiên cứu toàn bộ quy trình sản xuất để xác định các điểm phát sinh chất thải:</p>
            <ul>
                <li>Phân tích vòng đời sản phẩm (LCA)</li>
                <li>Đánh giá tác động môi trường</li>
                <li>Tìm kiếm nguyên liệu thay thế bền vững</li>
                <li>Hợp tác với các nhà cung cấp có cùng tầm nhìn</li>
            </ul>
            
            <h3>Giai đoạn 2: Cải tiến bao bì (2020-2021)</h3>
            <p>Bao bì là một trong những nguồn chất thải lớn nhất trong ngành mỹ phẩm. Cocoon đã:</p>
            
            <h4>Thay thế vật liệu:</h4>
            <ul>
                <li>Nhựa → Thủy tinh tái chế và tre tự nhiên</li>
                <li>Nhãn plastic → Nhãn giấy từ bã mía</li>
                <li>Túi nilon → Túi giấy kraft và túi vải canvas</li>
                <li>Foam bảo vệ → Vật liệu đệm từ bã ngô</li>
            </ul>
            
            <h4>Thiết kế thông minh:</h4>
            <ul>
                <li>Bao bì có thể tái sử dụng làm chậu cây, hộp đựng đồ</li>
                <li>Kích thước tối ưu để giảm không gian vận chuyển</li>
                <li>Hướng dẫn tái chế rõ ràng trên mỗi sản phẩm</li>
            </ul>
            
            <h3>Giai đoạn 3: Tối ưu sản xuất (2021-2022)</h3>
            
            <h4>Năng lượng xanh:</h4>
            <ul>
                <li>Lắp đặt hệ thống điện mặt trời 100kW</li>
                <li>Sử dụng máy móc tiết kiệm năng lượng</li>
                <li>Tối ưu hóa quy trình để giảm thời gian vận hành</li>
            </ul>
            
            <h4>Quản lý nước:</h4>
            <ul>
                <li>Hệ thống xử lý nước thải khép kín</li>
                <li>Tái sử dụng nước đã xử lý cho tưới cây</li>
                <li>Thu gom nước mưa để sử dụng trong sản xuất</li>
            </ul>
            
            <h4>Giảm thiểu chất thải:</h4>
            <ul>
                <li>Tái chế 100% phế liệu sản xuất</li>
                <li>Ủ compost từ nguyên liệu thực vật thừa</li>
                <li>Quyên góp sản phẩm lỗi cho các tổ chức từ thiện</li>
            </ul>
            
            <h3>Giai đoạn 4: Chuỗi cung ứng bền vững (2022-2023)</h3>
            
            <h4>Hợp tác với nông dân:</h4>
            <ul>
                <li>Đào tạo kỹ thuật canh tác hữu cơ</li>
                <li>Cam kết mua nguyên liệu với giá công bằng</li>
                <li>Hỗ trợ chứng nhận organic cho nông trại</li>
            </ul>
            
            <h4>Vận chuyển xanh:</h4>
            <ul>
                <li>Ưu tiên nhà cung cấp địa phương</li>
                <li>Sử dụng xe điện cho giao hàng nội thành</li>
                <li>Tối ưu tuyến đường để giảm khí thải</li>
            </ul>
            
            <h2>Những thành tựu đạt được</h2>
            
            <h3>Con số ấn tượng:</h3>
            <ul>
                <li>Giảm 85% chất thải so với năm 2019</li>
                <li>Tiết kiệm 60% năng lượng nhờ điện mặt trời</li>
                <li>Tái chế 95% vật liệu bao bì</li>
                <li>Giảm 40% khí thải carbon</li>
            </ul>
            
            <h3>Giải thưởng và chứng nhận:</h3>
            <ul>
                <li>Chứng nhận Zero Waste to Landfill</li>
                <li>Giải thưởng Doanh nghiệp Xanh Việt Nam 2023</li>
                <li>Chứng nhận B-Corp về trách nhiệm xã hội</li>
            </ul>
            
            <h2>Thách thức và bài học</h2>
            
            <h3>Thách thức:</h3>
            <ul>
                <li>Chi phí ban đầu cao hơn 30-40%</li>
                <li>Khó khăn trong việc tìm nhà cung cấp phù hợp</li>
                <li>Thay đổi thói quen của nhân viên và khách hàng</li>
                <li>Cân bằng giữa chất lượng và tính bền vững</li>
            </ul>
            
            <h3>Bài học quý giá:</h3>
            <ul>
                <li>Sự kiên trì và cam kết dài hạn là chìa khóa</li>
                <li>Giáo dục khách hàng cũng quan trọng như sản phẩm</li>
                <li>Hợp tác với đối tác cùng tầm nhìn mang lại hiệu quả cao</li>
                <li>Đổi mới không ngừng để tìm giải pháp tốt hơn</li>
            </ul>
            
            <h2>Kế hoạch tương lai</h2>
            
            <h3>2024-2025:</h3>
            <ul>
                <li>Đạt mục tiêu Zero Waste 100%</li>
                <li>Mở rộng chương trình thu hồi bao bì từ khách hàng</li>
                <li>Phát triển dòng sản phẩm refill</li>
                <li>Xây dựng trung tâm R&D xanh</li>
            </ul>
            
            <h3>2025-2030:</h3>
            <ul>
                <li>Trở thành carbon negative</li>
                <li>Chia sẻ công nghệ Zero Waste với ngành</li>
                <li>Mở rộng mô hình ra quốc tế</li>
                <li>Đào tạo 1000 doanh nghiệp về Zero Waste</li>
            </ul>
            
            <h2>Lời kêu gọi</h2>
            <p>Hành trình Zero Waste không chỉ là trách nhiệm của Cocoon mà của toàn xã hội. Hãy cùng chúng tôi:</p>
            <ul>
                <li>Lựa chọn sản phẩm bền vững</li>
                <li>Tái sử dụng bao bì một cách sáng tạo</li>
                <li>Chia sẻ thông điệp Zero Waste với bạn bè</li>
                <li>Ủng hộ các thương hiệu có trách nhiệm với môi trường</li>
            </ul>
            
            <p>Cùng nhau, chúng ta có thể tạo ra một tương lai xanh hơn, sạch hơn cho thế hệ mai sau!</p>
        </div>
        `
    },
    {
        id: 6,
        title: "Routine chăm sóc da 7 bước với sản phẩm Cocoon",
        excerpt: "Hướng dẫn chi tiết routine chăm sóc da hoàn chỉnh từ sáng đến tối với các sản phẩm thuần chay của Cocoon.",
        image: "/skincare-serum-toner-moisturizer.jpg",
        date: "20.12.2024",
        author: "Cocoon",
        category: "Hướng dẫn sử dụng",
        readTime: "10 phút đọc",
        tags: ["Routine", "Chăm sóc da", "Hướng dẫn", "Skincare"],
        content: `
        <div class="article-content">
            <p>Một làn da khỏe mạnh, rạng rỡ không đến từ một ngày một đêm mà là kết quả của một routine chăm sóc da khoa học và kiên trì. Hãy cùng Cocoon xây dựng routine 7 bước hoàn hảo cho làn da của bạn!</p>
            
            <h2>Tại sao cần routine chăm sóc da?</h2>
            <p>Da là cơ quan lớn nhất của cơ thể, đóng vai trò bảo vệ chúng ta khỏi các tác nhân có hại từ môi trường. Một routine chăm sóc da đúng cách sẽ:</p>
            <ul>
                <li>Duy trì hàng rào bảo vệ tự nhiên của da</li>
                <li>Cung cấp dưỡng chất cần thiết</li>
                <li>Ngăn ngừa các vấn đề da liễu</li>
                <li>Chậm quá trình lão hóa</li>
                <li>Tăng cường sự tự tin</li>
            </ul>
            
            <h2>Routine chăm sóc da buổi sáng</h2>
            
            <h3>Bước 1: Làm sạch nhẹ nhàng</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Sữa rửa mặt Cocoon Gentle Cleanser</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Làm ướt mặt với nước ấm</li>
                <li>Lấy 1-2 pump sữa rửa mặt ra lòng bàn tay</li>
                <li>Tạo bọt nhẹ nhàng và massage lên mặt trong 30 giây</li>
                <li>Rửa sạch với nước mát</li>
                <li>Thấm khô bằng khăn mềm</li>
            </ul>
            <p><strong>Lưu ý:</strong> Buổi sáng chỉ cần làm sạch nhẹ để loại bỏ dầu thừa và tế bào chết tích tụ qua đêm.</p>
            
            <h3>Bước 2: Cân bằng pH với Toner</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Hydrating Toner với chiết xuất sen</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Thấm toner lên bông cotton hoặc đổ ra lòng bàn tay</li>
                <li>Nhẹ nhàng pat lên toàn bộ khuôn mặt</li>
                <li>Tránh vùng mắt nhạy cảm</li>
                <li>Đợi 1-2 phút để da hấp thụ</li>
            </ul>
            
            <h3>Bước 3: Serum dưỡng chất</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Vitamin C Serum (sáng) hoặc Niacinamide Serum</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Lấy 2-3 giọt serum</li>
                <li>Chấm đều lên trán, má, cằm</li>
                <li>Massage nhẹ nhàng từ trong ra ngoài</li>
                <li>Đợi 5-10 phút để serum thấm hoàn toàn</li>
            </ul>
            
            <h3>Bước 4: Kem dưỡng ẩm</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Daily Moisturizer</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Lấy lượng kem bằng hạt đậu xanh</li>
                <li>Chấm đều lên 5 điểm: trán, 2 má, mũi, cằm</li>
                <li>Massage theo chuyển động tròn từ trong ra ngoài</li>
                <li>Đặc biệt chú ý vùng cổ</li>
            </ul>
            
            <h3>Bước 5: Chống nắng (QUAN TRỌNG NHẤT)</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Mineral Sunscreen SPF 50+</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Thoa đều lên toàn bộ khuôn mặt và cổ</li>
                <li>Sử dụng lượng đủ (khoảng 1/4 thìa cà phê cho mặt)</li>
                <li>Thoa lại sau mỗi 2 giờ nếu ở ngoài trời</li>
                <li>Không bỏ qua tai, cổ và vùng quanh mắt</li>
            </ul>
            
            <h2>Routine chăm sóc da buổi tối</h2>
            
            <h3>Bước 1: Tẩy trang (nếu có makeup)</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Cleansing Oil</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Thoa dầu tẩy trang lên da khô</li>
                <li>Massage nhẹ nhàng 1-2 phút</li>
                <li>Thêm một ít nước để tạo sữa</li>
                <li>Rửa sạch với nước ấm</li>
            </ul>
            
            <h3>Bước 2: Làm sạch sâu</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Deep Cleansing Foam</p>
            <p><strong>Cách sử dụng:</strong> Tương tự như buổi sáng nhưng massage kỹ hơn (1-2 phút)</p>
            
            <h3>Bước 3: Toner</h3>
            <p>Sử dụng tương tự như buổi sáng</p>
            
            <h3>Bước 4: Treatment Serum</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Retinol Serum (2-3 lần/tuần) hoặc Hyaluronic Acid Serum</p>
            <p><strong>Lưu ý:</strong></p>
            <ul>
                <li>Retinol chỉ dùng buổi tối</li>
                <li>Bắt đầu với tần suất thấp (1-2 lần/tuần)</li>
                <li>Luôn dùng chống nắng ngày hôm sau</li>
            </ul>
            
            <h3>Bước 5: Kem dưỡng ẩm đêm</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Night Repair Cream</p>
            <p><strong>Đặc điểm:</strong> Kết cấu đậm đặc hơn, chứa nhiều dưỡng chất phục hồi da qua đêm</p>
            
            <h3>Bước 6: Dưỡng mắt</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Eye Cream</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Lấy lượng kem bằng hạt gạo</li>
                <li>Chấm nhẹ quanh vùng mắt</li>
                <li>Massage bằng ngón áp út theo hình số 8</li>
            </ul>
            
            <h3>Bước 7: Lip care</h3>
            <p><strong>Sản phẩm gợi ý:</strong> Cocoon Nourishing Lip Balm</p>
            <p>Thoa đều lên môi để dưỡng ẩm qua đêm</p>
            
            <h2>Routine đặc biệt theo tuần</h2>
            
            <h3>2-3 lần/tuần: Exfoliation</h3>
            <p><strong>Sản phẩm:</strong> Cocoon Gentle Exfoliating Scrub hoặc AHA/BHA Toner</p>
            <p><strong>Thời điểm:</strong> Buổi tối, thay thế bước toner thông thường</p>
            
            <h3>1-2 lần/tuần: Mặt nạ</h3>
            <p><strong>Sản phẩm:</strong></p>
            <ul>
                <li>Cocoon Hydrating Mask (da khô)</li>
                <li>Cocoon Clay Mask (da dầu, mụn)</li>
                <li>Cocoon Brightening Mask (da xỉn màu)</li>
            </ul>
            
            <h2>Tips để routine hiệu quả</h2>
            
            <h3>Thời gian chờ giữa các bước:</h3>
            <ul>
                <li>Toner → Serum: 1-2 phút</li>
                <li>Serum → Moisturizer: 5-10 phút</li>
                <li>Moisturizer → Sunscreen: 2-3 phút</li>
            </ul>
            
            <h3>Nguyên tắc layering:</h3>
            <p>Thoa từ sản phẩm có kết cấu mỏng đến đặc: Toner → Serum → Moisturizer → Sunscreen</p>
            
            <h3>Điều chỉnh theo loại da:</h3>
            <ul>
                <li><strong>Da khô:</strong> Tăng cường dưỡng ẩm, giảm tần suất exfoliation</li>
                <li><strong>Da dầu:</strong> Sử dụng sản phẩm oil-free, tăng tần suất làm sạch</li>
                <li><strong>Da nhạy cảm:</strong> Chọn sản phẩm không mùi, không cồn</li>
                <li><strong>Da hỗn hợp:</strong> Sử dụng sản phẩm khác nhau cho từng vùng</li>
            </ul>
            
            <h2>Lịch trình routine mẫu</h2>
            
            <h3>Tuần đầu (làm quen):</h3>
            <ul>
                <li>Chỉ sử dụng: Cleanser + Toner + Moisturizer + Sunscreen</li>
                <li>Quan sát phản ứng của da</li>
            </ul>
            
            <h3>Tuần 2-4 (bổ sung):</h3>
            <ul>
                <li>Thêm serum phù hợp với nhu cầu da</li>
                <li>Bắt đầu exfoliation 1 lần/tuần</li>
            </ul>
            
            <h3>Từ tháng thứ 2 (hoàn thiện):</h3>
            <ul>
                <li>Routine đầy đủ 7 bước</li>
                <li>Điều chỉnh sản phẩm theo mùa</li>
            </ul>
            
            <h2>Những sai lầm cần tránh</h2>
            <ul>
                <li>Thay đổi sản phẩm quá thường xuyên</li>
                <li>Sử dụng quá nhiều sản phẩm cùng lúc</li>
                <li>Bỏ qua chống nắng</li>
                <li>Không kiên trì với routine</li>
                <li>Không patch test sản phẩm mới</li>
            </ul>
            
            <h2>Kết luận</h2>
            <p>Routine chăm sóc da 7 bước có thể trông phức tạp, nhưng khi đã thành thói quen, bạn sẽ thấy đây là khoảng thời gian thư giãn và chăm sóc bản thân tuyệt vời. Hãy nhớ rằng:</p>
            <ul>
                <li>Kiên trì là chìa khóa thành công</li>
                <li>Lắng nghe nhu cầu của làn da</li>
                <li>Điều chỉnh routine theo thời gian và hoàn cảnh</li>
                <li>Tham khảo ý kiến chuyên gia khi cần thiết</li>
            </ul>
            
            <p>Chúc bạn có một hành trình chăm sóc da thú vị và đạt được làn da khỏe mạnh, rạng rỡ như mong muốn!</p>
        </div>
        `
    }
]

// Ý tưởng bài viết mới (để bạn phát triển)
export const articleIdeas: Omit<Article, 'id' | 'content'>[] = [
    {
        title: "Câu chuyện về người nông dân trồng sen cho Cocoon",
        excerpt: "Gặp gỡ những người nông dân tận tâm trồng sen sạch, cung cấp nguyên liệu quý giá cho các sản phẩm Cocoon.",
        image: "/lotus-flower-toner-vietnamese-skincare.jpg",
        date: "22.12.2024",
        author: "Cocoon",
        category: "Câu chuyện con người",
        readTime: "5 phút đọc",
        tags: ["Nông dân", "Sen", "Nguyên liệu", "Câu chuyện"]
    },
    {
        title: "Mỹ phẩm thuần chay vs. Mỹ phẩm truyền thống: So sánh chi tiết",
        excerpt: "Phân tích ưu nhược điểm của mỹ phẩm thuần chay so với mỹ phẩm truyền thống về hiệu quả, an toàn và tác động môi trường.",
        image: "/vegan-skincare-products-natural-cosmetics-green-le.jpg",
        date: "25.12.2024",
        author: "Cocoon",
        category: "Giáo dục",
        readTime: "12 phút đọc",
        tags: ["So sánh", "Thuần chay", "Giáo dục", "Hiệu quả"]
    },
    {
        title: "Lễ hội Tết và làn da: Cách giữ da đẹp trong mùa ăn uống",
        excerpt: "Tips chăm sóc da đặc biệt trong dịp Tết Nguyên Đán, khi chế độ ăn uống thay đổi và thời tiết chuyển mùa.",
        image: "/winter-melon-serum-vietnamese-skincare.jpg",
        date: "28.12.2024",
        author: "Cocoon",
        category: "Mùa lễ hội",
        readTime: "4 phút đọc",
        tags: ["Tết", "Chăm sóc da", "Mùa lễ hội", "Skincare tips"]
    },
    {
        title: "Cocoon Lab: Bên trong phòng thí nghiệm mỹ phẩm thuần chay",
        excerpt: "Khám phá quy trình nghiên cứu và phát triển sản phẩm tại phòng thí nghiệm Cocoon, nơi khoa học gặp gỡ thiên nhiên.",
        image: "/natural-cosmetics-laboratory-vietnam.jpg",
        date: "30.12.2024",
        author: "Cocoon",
        category: "Khoa học",
        readTime: "9 phút đọc",
        tags: ["Nghiên cứu", "Phòng thí nghiệm", "Khoa học", "R&D"]
    },
    {
        title: "Phụ nữ Việt và xu hướng làm đẹp xanh",
        excerpt: "Tìm hiểu thái độ và hành vi của phụ nữ Việt Nam đối với mỹ phẩm thuần chay và xu hướng làm đẹp bền vững.",
        image: "/vietnamese-woman-portrait-professional.jpg",
        date: "02.01.2025",
        author: "Cocoon",
        category: "Xu hướng",
        readTime: "7 phút đọc",
        tags: ["Phụ nữ Việt", "Xu hướng", "Làm đẹp xanh", "Khảo sát"]
    },
    {
        title: "DIY: Tự làm mặt nạ từ nguyên liệu thiên nhiên tại nhà",
        excerpt: "Hướng dẫn chi tiết cách tự làm các loại mặt nạ dưỡng da từ nguyên liệu thiên nhiên dễ tìm tại Việt Nam.",
        image: "/natural-face-mask-turmeric.jpg",
        date: "05.01.2025",
        author: "Cocoon",
        category: "DIY",
        readTime: "8 phút đọc",
        tags: ["DIY", "Mặt nạ", "Tự làm", "Nguyên liệu tự nhiên"]
    },
    {
        title: "Cocoon x Influencer: Hành trình lan tỏa thông điệp xanh",
        excerpt: "Câu chuyện hợp tác với các beauty influencer Việt Nam để lan tỏa thông điệp làm đẹp bền vững và thuần chay.",
        image: "/vietnamese-young-man-portrait-student.jpg",
        date: "08.01.2025",
        author: "Cocoon",
        category: "Hợp tác",
        readTime: "6 phút đọc",
        tags: ["Influencer", "Hợp tác", "Marketing", "Thông điệp xanh"]
    }
]

// Categories cho bài viết
export const articleCategories = [
    "Hoạt động xã hội",
    "Làm đẹp",
    "Câu chuyện thương hiệu",
    "Thành phần tự nhiên",
    "Môi trường",
    "Hướng dẫn sử dụng",
    "Câu chuyện con người",
    "Giáo dục",
    "Mùa lễ hội",
    "Khoa học",
    "Xu hướng",
    "DIY",
    "Hợp tác"
]

// Tags phổ biến
export const popularTags = [
    "Thuần chay",
    "Chăm sóc da",
    "Thiên nhiên",
    "Việt Nam",
    "Bền vững",
    "Môi trường",
    "Skincare",
    "Làm đẹp",
    "Organic",
    "Zero Waste",
    "Thương hiệu",
    "Nghiên cứu",
    "DIY",
    "Tips"
]