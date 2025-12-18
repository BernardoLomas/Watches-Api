export const swaggerDocument = {
  openapi: '3.0.0',

  info: {
    title: 'Bernardo Lomas Watches API',
    version: '1.0.0',
    description: 'Online ordering system API'
  },

  servers: [
    {
      url: 'http://localhost:3000/api'
    }
  ],

  tags: [
    { name: 'Products', description: 'Products catalog' },
    { name: 'Cart', description: 'Shopping cart operations' },
    { name: 'Checkout', description: 'Order checkout' }
  ],

  paths: {
    '/products': {
      get: {
        tags: ['Products'],
        summary: 'List all products',
        responses: {
          200: {
            description: 'List of products',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Product' }
                }
              }
            }
          },
          500: { description: 'Internal server error' }
        }
      }
    },

    '/cart/items': {
      post: {
        tags: ['Cart'],
        summary: 'Add item to cart',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CartItem' }
            }
          }
        },
        responses: {
          201: { description: 'Item added to cart' },
          400: { description: 'Invalid request' }
        }
      }
    },

    '/cart/items/{productId}': {
      put: {
        tags: ['Cart'],
        summary: 'Update cart item quantity',
        parameters: [
          {
            name: 'productId',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CartItem' }
            }
          }
        },
        responses: {
          200: { description: 'Item updated' }
        }
      },

      delete: {
        tags: ['Cart'],
        summary: 'Remove item from cart',
        parameters: [
          {
            name: 'productId',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        responses: {
          204: { description: 'Item removed' }
        }
      }
    },

    '/checkout': {
      post: {
        tags: ['Checkout'],
        summary: 'Simulate checkout process',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Checkout' }
            }
          }
        },
        responses: {
          200: { description: 'Checkout success' },
          400: { description: 'Invalid request' }
        }
      }
    }
  },

  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          description: { type: 'string' },
          price: { type: 'number' },
          brand: { type: 'string' },
          imageUrl: { type: 'string' }
        }
      },

      CartItem: {
        type: 'object',
        required: ['productId', 'quantity'],
        properties: {
          productId: { type: 'number' },
          quantity: { type: 'number' }
        }
      },

      Checkout: {
        type: 'object',
        required: ['items'],
        properties: {
          items: {
            type: 'array',
            items: { $ref: '#/components/schemas/CartItem' }
          }
        }
      }
    }
  }
}
