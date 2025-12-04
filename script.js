// Hafez Poems Database
const hafezPoems = [
    {
        text: `الا یا ایها الساقی ادر کاسا و ناولها
که عشق آسان نمود اول ولی افتاد مشکل‌ها`,
        interpretation: "عشق در ابتدا آسان به نظر می‌رسد اما سختی‌های بسیاری دارد."
    },
    {
        text: `صلاح کار کجا و من خراب کجا
ببین تفاوت ره از کجاست تا به کجا`,
        interpretation: "راه درستکاری و راه من بسیار متفاوت است."
    },
    {
        text: `دل می‌رود ز دستم صاحب‌دلان خدا را
دستی به دست ما دهید و دست دل به دستی`,
        interpretation: "نیاز به کمک و یاری دوستان دارید."
    },
    {
        text: `شب تاریک و بیم موج و گردابی چنین هایل
کجا دانند حال ما سبکباران ساحل‌ها`,
        interpretation: "کسانی که در آسایش‌اند، درد دل‌های ما را نمی‌فهمند."
    },
    {
        text: `غمت خوردم که بار عشق خواهی کشت و گویی
چرا هستی شکسته خاطر و رنجور و افسرده`,
        interpretation: "با تحمل و صبر، مشکلات حل خواهند شد."
    },
    {
        text: `به صحرا رو که از باغ و گلستان بی‌خبر ماند
کسی کز ماه رمضان صوم یک روزی نگیرد`,
        interpretation: "از فرصت‌های خوب استفاده کن."
    },
    {
        text: `مرا مهمان کس نیاید و گر آید خوش نیاید
به از من نازنینی دارد و خوشتر نشاطی`,
        interpretation: "به دنبال آرامش درونی باشید."
    },
    {
        text: `چو گل در سبزه بفشانم من این دستار فرو ریز
که صد آفت بود در سبزه چون باغبان خوابست`,
        interpretation: "مراقب باش و هوشیار، فرصت‌ها را از دست نده."
    },
    {
        text: `سحرگه نرگس مستت به یاد آوردم و گفتم
که عیب مستی از این چشم فتان چندان نباشد`,
        interpretation: "زیبایی و عشق ارزشمند است."
    },
    {
        text: `بیا ساقی آن می باقی بده جامی که هستی
نمایاند چو مطرب نغمه‌ای بر نی نوایی`,
        interpretation: "از لحظات خوب زندگی لذت ببر."
    },
    {
        text: `گر چه بادا بر من ای گردون بگردان هر چه خواهی
که من از حکم رضا سر به هیچ‌رو نخواهم تافت`,
        interpretation: "به تقدیر راضی باش و صبور."
    },
    {
        text: `به جان دوستان که حافظ از همه عیبی که هست
بی‌عیب است، اگر عیب نداند کرده‌اند`,
        interpretation: "کمالات خود را بشناس و از نقدهای بیهوده نترس."
    },
    {
        text: `صبا به لطف بگو آن غزال رعنا را
که سر به کوه و بیابان تو داده‌ای ما را`,
        interpretation: "دلتنگی و انتظار برای دیدار کسی."
    },
    {
        text: `دوش از مسجد سوی میخانه آمد پیر ما
عجب یارید اهل نظر این چه رای و طرز است`,
        interpretation: "گاهی باید از قواعد معمول خارج شد."
    },
    {
        text: `از این باغ بی‌برگ و نوا چه غنیمت بر توان یافت
که با باد خزان هر دم شکار دگرگونی است`,
        interpretation: "در دوران سختی، استقامت لازم است."
    },
    {
        text: `چو من دلبسته آن زلف پریشان شوی
فغان از حادثات دل نگاهت می‌زند`,
        interpretation: "عشق پر از هیجان و نگرانی است."
    },
    {
        text: `گرت از باغ دوران ره به صحرای وصال است
رضا ده چون به خار آزار پای همت افتد`,
        interpretation: "برای رسیدن به هدف باید سختی‌ها را تحمل کرد."
    },
    {
        text: `حافظ اگر چنان همایی کز تو شاهی یابند
تو را از نیم شب فریاد و مهرش از سحرگاهی`,
        interpretation: "ارزش واقعی خود را بدان و به آن افتخار کن."
    },
    {
        text: `دلا چون من به درد دل گرفتاری ندیده‌ای
مرا تسکین جز این باشد که جان سپارم و بمیرم`,
        interpretation: "درد دل و رنج جزء طبیعی زندگی است."
    },
    {
        text: `گفتم ای دوست بیا تا غم دل با تو گویم
گفت روز دراز است بگو دیر آمدی`,
        interpretation: "فرصت‌ها را از دست نده، زود اقدام کن."
    }
];

// Wheel Configuration
const wheelConfig = {
    segments: 12,
    colors: [
        '#DC143C', '#8B0000', '#CD5C5C', '#B22222',
        '#FF6347', '#FA8072', '#E9967A', '#F08080',
        '#DC143C', '#8B0000', '#CD5C5C', '#B22222'
    ],
    textColor: '#FFD700',
    borderColor: '#FFD700',
    borderWidth: 3
};

class FortuneWheel {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.currentRotation = 0;
        this.isSpinning = false;
        this.targetRotation = 0;
        
        // Adjust canvas for device pixel ratio
        this.setupCanvas();
        this.draw();
    }

    setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        this.centerX = rect.width / 2;
        this.centerY = rect.height / 2;
        this.radius = Math.min(rect.width, rect.height) / 2 - 10;
    }

    draw() {
        const { segments, colors, textColor, borderColor, borderWidth } = wheelConfig;
        const anglePerSegment = (2 * Math.PI) / segments;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.centerX, this.centerY);
        this.ctx.rotate(this.currentRotation);

        // Draw segments
        for (let i = 0; i < segments; i++) {
            const startAngle = i * anglePerSegment;
            const endAngle = startAngle + anglePerSegment;

            // Draw segment
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.radius, startAngle, endAngle);
            this.ctx.lineTo(0, 0);
            this.ctx.fillStyle = colors[i % colors.length];
            this.ctx.fill();

            // Draw border
            this.ctx.strokeStyle = borderColor;
            this.ctx.lineWidth = borderWidth;
            this.ctx.stroke();

            // Draw segment number
            this.ctx.save();
            this.ctx.rotate(startAngle + anglePerSegment / 2);
            this.ctx.textAlign = 'right';
            this.ctx.fillStyle = textColor;
            this.ctx.font = 'bold 16px Vazir, Arial';
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            this.ctx.shadowBlur = 3;
            this.ctx.fillText((i + 1).toString(), this.radius - 20, 5);
            this.ctx.restore();
        }

        // Draw center circle
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 30, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fill();
        this.ctx.strokeStyle = '#8B0000';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.restore();
    }

    spin() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        
        // Random number of rotations (5-8 full spins) plus random final position
        const extraSpins = 5 + Math.random() * 3;
        const randomAngle = Math.random() * 2 * Math.PI;
        this.targetRotation = this.currentRotation + (extraSpins * 2 * Math.PI) + randomAngle;
        
        const duration = 4000; // 4 seconds
        const startTime = Date.now();
        const startRotation = this.currentRotation;

        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            this.currentRotation = startRotation + (this.targetRotation - startRotation) * easeOut;
            this.draw();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                this.onSpinComplete();
            }
        };

        animate();
    }

    onSpinComplete() {
        // Calculate which segment the pointer is pointing at
        const normalizedRotation = (this.currentRotation % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        const anglePerSegment = (2 * Math.PI) / wheelConfig.segments;
        
        // The pointer is at the top (0 degrees), so we need to account for that
        const pointerAngle = (2 * Math.PI - normalizedRotation) % (2 * Math.PI);
        const selectedSegment = Math.floor(pointerAngle / anglePerSegment);
        
        // Trigger the result display
        if (window.wheelApp) {
            window.wheelApp.showResult(selectedSegment);
        }
    }

    reset() {
        this.currentRotation = 0;
        this.draw();
    }
}

// Main Application
class WheelApp {
    constructor() {
        this.wheel = null;
        this.spinButton = document.getElementById('spinButton');
        this.resultSection = document.getElementById('resultSection');
        this.poemText = document.getElementById('poemText');
        this.newFortuneButton = document.getElementById('newFortuneButton');
        
        this.init();
    }

    init() {
        // Initialize wheel
        this.wheel = new FortuneWheel('wheelCanvas');
        window.wheelApp = this;

        // Event listeners
        this.spinButton.addEventListener('click', () => this.handleSpin());
        this.newFortuneButton.addEventListener('click', () => this.handleNewFortune());

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.wheel.setupCanvas();
                this.wheel.draw();
            }, 250);
        });
    }

    handleSpin() {
        if (this.wheel.isSpinning) return;
        
        this.spinButton.disabled = true;
        this.spinButton.classList.add('spinning');
        this.resultSection.classList.add('hidden');
        
        // Add haptic feedback for mobile devices
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
        
        this.wheel.spin();
    }

    showResult(segmentIndex) {
        // Use segment index to select a poem (map 12 segments to 20 poems)
        const poemIndex = Math.floor((segmentIndex / wheelConfig.segments) * hafezPoems.length);
        const selectedPoem = hafezPoems[poemIndex];
        
        // Create elements safely without innerHTML to prevent XSS
        const poemTextDiv = document.createElement('div');
        poemTextDiv.style.marginBottom = '15px';
        poemTextDiv.style.fontSize = '1.2rem';
        poemTextDiv.textContent = selectedPoem.text;
        
        const interpretationDiv = document.createElement('div');
        interpretationDiv.style.color = '#FFA500';
        interpretationDiv.style.fontSize = '0.95rem';
        interpretationDiv.style.fontStyle = 'italic';
        interpretationDiv.textContent = `تعبیر: ${selectedPoem.interpretation}`;
        
        // Clear and append
        this.poemText.innerHTML = '';
        this.poemText.appendChild(poemTextDiv);
        this.poemText.appendChild(interpretationDiv);
        
        // Show result section with animation
        setTimeout(() => {
            this.resultSection.classList.remove('hidden');
            this.spinButton.disabled = false;
            this.spinButton.classList.remove('spinning');
            
            // Scroll to result smoothly
            this.resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate([100, 50, 100]);
            }
        }, 500);
    }

    handleNewFortune() {
        this.resultSection.classList.add('hidden');
        
        // Scroll back to wheel
        this.wheel.canvas.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Small vibration feedback
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(30);
        }
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new WheelApp();
    });
} else {
    new WheelApp();
}

// Service Worker Registration for PWA (optional but recommended for production)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, that's okay for now
        });
    });
}
