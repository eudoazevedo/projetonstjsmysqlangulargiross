"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async findOne(id) {
        if (id != Number(id)) {
            throw new common_1.BadRequestException('User not found');
        }
        try {
            const user = await this.prisma.user.findUnique({
                where: { id },
            });
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            return Object.assign({}, user);
        }
        catch (error) {
            throw new common_1.BadRequestException('User not found');
        }
    }
    async create(data) {
        const user = await this.prisma.user.findUnique({
            where: { email: data.email },
        });
        if (user) {
            throw new common_1.BadRequestException('User already exists');
        }
        try {
            await this.prisma.user.create({
                data,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('User not found');
        }
        return Object.assign(Object.assign({}, user), data);
    }
    async update(id, data) {
        if (id != Number(id)) {
            throw new common_1.BadRequestException('User not found');
        }
        const email = await this.prisma.user.findUnique({
            where: { email: data.email },
        });
        if (email) {
            throw new common_1.BadRequestException('Email already exists');
        }
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        try {
            await this.prisma.user.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('User not found');
        }
        return Object.assign(Object.assign({}, user), data);
    }
    async delete(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        try {
            await this.prisma.user.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('User not found');
        }
        return Object.assign({}, user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map