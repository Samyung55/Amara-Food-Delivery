const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name: { 
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    customItem: [{
        name: {
            type: String
        },
        price: {
            type: Number
        },
        type: {
            type: String
        }
    }],
    isCustom: {
        type: Boolean,
        default: false,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', required: true
    }
    }],

    shippingAddress: {
        name: {
            type: String,
            required: true
        },
        mobNo: {
            type: Number,
            required: true,
        },
        pinCode: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true
        },
    },

    paymentMethod: {
        type: String,
        required: true
    },

    shippingPrice: {
        type: Number,
        required: true
    },

    itemsPrice: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },

    isPaid: {
        type: Boolean,
        default: false
    },

    paidAt: {
        type: Date
    },

    isDelivered: {
        type: Boolean,
        default: false
    },

    isPlaced: {
        type: Boolean,
        default: true
    },

    isShipped: {
        type: Boolean,
        default: false
    },

    deliveryDate: {
        type: Date
    },

    paymentId: {
        type: String
    },

    email: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)


module.exports = mongoose.model('Order', orderSchema);
